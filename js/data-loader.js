/**
 * Data Loader - تحميل البيانات من ملفات JSON
 * Handles archive data and canonical evidence resolution.
 */

class DataLoader {
    constructor() {
        this.baseUrl = '../data/';
        this.cache = {};
        this.dataFiles = {
            biography: 'biography.json',
            timeline: 'timeline.json',
            events: 'events.json',
            sources: 'source-registry.json',
            legacySources: 'sources.json',
            people: 'people.json',
            places: 'places.json',
            mediaIndex: 'media-index.json'
        };
    }

    async loadJSON(filename) {
        if (this.cache[filename]) return this.cache[filename];
        const response = await fetch(this.baseUrl + filename);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        this.cache[filename] = data;
        return data;
    }

    async getBiography() { return this.loadJSON(this.dataFiles.biography); }
    async getTimeline() { return this.loadJSON(this.dataFiles.timeline); }
    async getEvents() { return this.loadJSON(this.dataFiles.events); }
    async getSources() { return this.loadJSON(this.dataFiles.sources); }
    async getLegacySources() { return this.loadJSON(this.dataFiles.legacySources); }
    async getPeople() { return this.loadJSON(this.dataFiles.people); }
    async getPlaces() { return this.loadJSON(this.dataFiles.places); }
    async getMediaIndex() { return this.loadJSON(this.dataFiles.mediaIndex); }

    normalizeTimeline(data) {
        return Array.isArray(data?.timeline) ? data.timeline :
               Array.isArray(data?.events) ? data.events : [];
    }

    normalizeEvents(data) {
        return Array.isArray(data?.major_events) ? data.major_events :
               Array.isArray(data?.events) ? data.events : [];
    }

    normalizeSources(data) {
        if (Array.isArray(data?.sources)) return data.sources;
        const groups = data?.sources || {};
        return Object.entries(groups).flatMap(([group, items]) =>
            Array.isArray(items) ? items.map(source => ({ ...source, group })) : []
        );
    }

    normalizeSourceId(sourceId, data) {
        const aliases = data?.aliases || {};
        return aliases[sourceId] || sourceId;
    }

    findSource(sourceId, data) {
        const canonicalId = this.normalizeSourceId(sourceId, data);
        return this.normalizeSources(data).find(source => source.id === canonicalId) || null;
    }

    resolveSourceIds(sourceIds, data) {
        return (Array.isArray(sourceIds) ? sourceIds : []).map(id => ({
            requestedId: id,
            canonicalId: this.normalizeSourceId(id, data),
            source: this.findSource(id, data)
        }));
    }

    auditSourceIds(sourceIds, data) {
        return this.resolveSourceIds(sourceIds, data).map(item => ({
            ...item,
            status: item.source ? item.source.status || 'registered' : 'UNRESOLVED'
        }));
    }

    async loadMultiple(fileNames) {
        const results = await Promise.all(fileNames.map(name => {
            const fileName = this.dataFiles[name] || name;
            return this.loadJSON(fileName);
        }));
        return fileNames.reduce((data, name, index) => {
            data[name] = results[index];
            return data;
        }, {});
    }

    searchBiography(query, data) {
        const results = [];
        const lowerQuery = query.toLowerCase();
        const person = data?.person;
        if (person && (person.name_arabic?.includes(query) || person.name_english?.toLowerCase().includes(lowerQuery))) {
            results.push({ type: 'biography', title: person.name_arabic, content: person });
        }
        return results;
    }

    searchTimeline(query, timelineData) {
        const results = [];
        const lowerQuery = query.toLowerCase();
        this.normalizeTimeline(timelineData).forEach(event => {
            const title = event.title || '';
            const description = event.description || '';
            const tags = event.tags || [];
            if (title.includes(query) || description.toLowerCase().includes(lowerQuery) || tags.some(tag => tag.includes(query))) {
                results.push({ type: 'timeline_event', year: event.year, title, date: event.date_arabic || event.date || `${event.year || ''}` });
            }
        });
        return results;
    }

    searchEvents(query, eventsData) {
        const results = [];
        const lowerQuery = query.toLowerCase();
        this.normalizeEvents(eventsData).forEach(event => {
            const title = event.title || '';
            const description = event.description || '';
            if (title.includes(query) || description.toLowerCase().includes(lowerQuery)) {
                results.push({ type: 'major_event', title, year: event.year });
            }
        });
        return results;
    }

    clearCache() { this.cache = {}; }

    getStats() {
        return {
            cachedFiles: Object.keys(this.cache).length,
            totalDataFiles: Object.keys(this.dataFiles).length,
            cacheSize: JSON.stringify(this.cache).length
        };
    }
}

const dataLoader = new DataLoader();
if (typeof module !== 'undefined' && module.exports) module.exports = dataLoader;
