/**
 * Data Loader - تحميل البيانات من ملفات JSON
 * يتعامل مع جميع ملفات البيانات بكفاءة
 */

class DataLoader {
    constructor() {
        this.baseUrl = '../data/';
        this.cache = {};
        this.dataFiles = {
            biography: 'biography.json',
            timeline: 'timeline.json',
            events: 'events.json',
            sources: 'sources.json',
            people: 'people.json',
            places: 'places.json',
            mediaIndex: 'media-index.json'
        };
    }

    /**
     * تحميل ملف JSON
     */
    async loadJSON(filename) {
        // تحقق من الـ cache أولاً
        if (this.cache[filename]) {
            return this.cache[filename];
        }

        try {
            const response = await fetch(this.baseUrl + filename);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // احفظ في الـ cache
            this.cache[filename] = data;
            
            console.log(`✓ Loaded: ${filename}`);
            return data;
            
        } catch (error) {
            console.error(`✗ Error loading ${filename}:`, error);
            throw error;
        }
    }

    /**
     * تحميل السيرة
     */
    async getBiography() {
        return this.loadJSON(this.dataFiles.biography);
    }

    /**
     * تحميل الخط الزمني
     */
    async getTimeline() {
        return this.loadJSON(this.dataFiles.timeline);
    }

    /**
     * تحميل الأحداث
     */
    async getEvents() {
        return this.loadJSON(this.dataFiles.events);
    }

    /**
     * تحميل المصادر
     */
    async getSources() {
        return this.loadJSON(this.dataFiles.sources);
    }

    /**
     * تحميل الأشخاص
     */
    async getPeople() {
        return this.loadJSON(this.dataFiles.people);
    }

    /**
     * تحميل الأماكن
     */
    async getPlaces() {
        return this.loadJSON(this.dataFiles.places);
    }

    /**
     * تحميل فهرس الوسائط
     */
    async getMediaIndex() {
        return this.loadJSON(this.dataFiles.mediaIndex);
    }

    /**
     * تحميل عدة ملفات في نفس الوقت
     */
    async loadMultiple(fileNames) {
        try {
            const promises = fileNames.map(name => {
                const fileName = this.dataFiles[name] || name;
                return this.loadJSON(fileName);
            });
            
            const results = await Promise.all(promises);
            const data = {};
            
            fileNames.forEach((name, index) => {
                data[name] = results[index];
            });
            
            return data;
            
        } catch (error) {
            console.error('Error loading multiple files:', error);
            throw error;
        }
    }

    /**
     * البحث في البيانات
     */
    searchBiography(query, data) {
        const results = [];
        const lowerQuery = query.toLowerCase();

        if (data.person) {
            // البحث في الاسم
            if (data.person.name_arabic?.includes(query) || 
                data.person.name_english?.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'biography',
                    title: data.person.name_arabic,
                    content: data.person
                });
            }
        }

        return results;
    }

    /**
     * البحث في الخط الزمني
     */
    searchTimeline(query, timelineData) {
        const results = [];
        const lowerQuery = query.toLowerCase();

        if (!timelineData.timeline) return results;

        timelineData.timeline.forEach(event => {
            if (event.title.includes(query) || 
                event.description.toLowerCase().includes(lowerQuery) ||
                (event.tags && event.tags.some(tag => tag.includes(query)))) {
                results.push({
                    type: 'timeline_event',
                    year: event.year,
                    title: event.title,
                    date: event.date_arabic || `${event.month}/${event.day}/${event.year}`
                });
            }
        });

        return results;
    }

    /**
     * البحث في الأحداث
     */
    searchEvents(query, eventsData) {
        const results = [];
        const lowerQuery = query.toLowerCase();

        if (!eventsData.major_events) return results;

        eventsData.major_events.forEach(event => {
            if (event.title.includes(query) || 
                event.description.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'major_event',
                    title: event.title,
                    year: event.year
                });
            }
        });

        return results;
    }

    /**
     * مسح الـ cache
     */
    clearCache() {
        this.cache = {};
        console.log('✓ Cache cleared');
    }

    /**
     * الحصول على إحصائيات
     */
    getStats() {
        return {
            cachedFiles: Object.keys(this.cache).length,
            totalDataFiles: Object.keys(this.dataFiles).length,
            cacheSize: JSON.stringify(this.cache).length
        };
    }
}

// تصدير المثيل العام
const dataLoader = new DataLoader();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = dataLoader;
}
