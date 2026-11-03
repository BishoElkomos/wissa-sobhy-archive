/**
 * أرشيف القمص ويصا صبحي
 * Main Application JavaScript
 * v2.0.0
 */

// App Config
const APP = {
    name: 'أرشيف القمص ويصا صبحي تادرس',
    version: '2.0.0',
    dataPath: '../data/',
    language: localStorage.getItem('language') || 'ar',
    theme: localStorage.getItem('theme') || 'light',
    
    // Initialize
    init() {
        console.log(`${this.name} v${this.version} - Initializing...`);
        
        this.setupEventListeners();
        this.loadLanguage();
        this.setupTheme();
        this.loadPageData();
        
        console.log('✓ Application initialized successfully');
    },
    
    // Event Listeners
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('a[href*="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Active navigation link
        this.updateActiveNavLink();
        
        // Language switching
        const langEn = document.querySelector('.lang-en');
        if (langEn) {
            langEn.addEventListener('click', () => {
                this.switchLanguage('en');
            });
        }

        // Window resize
        window.addEventListener('resize', () => {
            this.handleResponsive();
        });
    },
    
    // Update Active Navigation Link
    updateActiveNavLink() {
        const currentPath = window.location.pathname;
        const currentFile = currentPath.split('/').pop() || 'index.html';
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(currentFile)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },
    
    // Load Language
    loadLanguage() {
        const lang = this.language;
        
        if (lang === 'en') {
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
        } else {
            document.documentElement.lang = 'ar';
            document.documentElement.dir = 'rtl';
        }
    },
    
    // Switch Language
    switchLanguage(lang) {
        localStorage.setItem('language', lang);
        
        if (lang === 'en') {
            window.location.href = '/en/index.html';
        } else {
            window.location.href = '/index.html';
        }
    },
    
    // Setup Theme
    setupTheme() {
        const theme = this.theme;
        
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        }
        
        // Watch for system dark mode preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            if (this.theme === 'auto') {
                document.body.classList.add('dark-mode');
            }
        }
    },
    
    // Load Page Data
    async loadPageData() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        switch (currentPage) {
            case 'index.html':
            case '':
                await this.loadHomePage();
                break;
            case 'biography.html':
                await this.loadBiography();
                break;
            case 'timeline.html':
                await this.loadTimeline();
                break;
            case 'events.html':
                await this.loadEvents();
                break;
            case 'media.html':
                await this.loadMedia();
                break;
            case 'sources.html':
                await this.loadSources();
                break;
            case 'search.html':
                await this.loadSearch();
                break;
        }
    },
    
    // Load Home Page
    async loadHomePage() {
        try {
            // Home page already loaded in HTML
            this.setupHeroAnimations();
            this.setupScrollAnimations();
        } catch (error) {
            console.error('Error loading home page:', error);
        }
    },
    
    // Load Biography Page
    async loadBiography() {
        try {
            const data = await this.loadJSON('biography.json');
            console.log('Biography data loaded:', data);
            // Will be populated via HTML template
        } catch (error) {
            console.error('Error loading biography:', error);
        }
    },
    
    // Load Timeline Page
    async loadTimeline() {
        try {
            const data = await this.loadJSON('timeline.json');
            console.log('Timeline data loaded:', data);
            this.renderTimeline(data);
        } catch (error) {
            console.error('Error loading timeline:', error);
        }
    },
    
    // Load Events Page
    async loadEvents() {
        try {
            const data = await this.loadJSON('events.json');
            console.log('Events data loaded:', data);
            this.renderEvents(data);
        } catch (error) {
            console.error('Error loading events:', error);
        }
    },
    
    // Load Media Page
    async loadMedia() {
        try {
            const data = await this.loadJSON('media-index.json');
            console.log('Media data loaded:', data);
            this.renderMedia(data);
        } catch (error) {
            console.error('Error loading media:', error);
        }
    },
    
    // Load Sources Page
    async loadSources() {
        try {
            const data = await this.loadJSON('sources.json');
            console.log('Sources data loaded:', data);
            this.renderSources(data);
        } catch (error) {
            console.error('Error loading sources:', error);
        }
    },
    
    // Load Search Page
    async loadSearch() {
        try {
            const bioData = await this.loadJSON('biography.json');
            const timelineData = await this.loadJSON('timeline.json');
            const eventsData = await this.loadJSON('events.json');
            
            this.initializeSearchIndex({
                biography: bioData,
                timeline: timelineData,
                events: eventsData
            });
        } catch (error) {
            console.error('Error loading search data:', error);
        }
    },
    
    // Load JSON File
    async loadJSON(filename) {
        try {
            const response = await fetch(this.dataPath + filename);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error loading ${filename}:`, error);
            throw error;
        }
    },
    
    // Render Timeline
    renderTimeline(data) {
        const container = document.getElementById('timeline-container');
        if (!container) return;
        
        const timeline = data.timeline || [];
        
        let html = '<div class="timeline">';
        
        timeline.forEach((event, index) => {
            const verified = event.verified ? '✓' : '';
            const dateStr = this.formatDate(event);
            
            html += `
                <div class="timeline-item ${event.event_type}">
                    <div class="timeline-date">${dateStr}</div>
                    <div class="timeline-content">
                        <h3>${event.title} ${verified}</h3>
                        <p>${event.description}</p>
                        ${event.tags ? `<div class="tags">${event.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    },
    
    // Render Events
    renderEvents(data) {
        const container = document.getElementById('events-container');
        if (!container) return;
        
        const events = data.major_events || [];
        
        let html = '<div class="events-list">';
        
        events.forEach(event => {
            html += `
                <div class="event-detail ${event.severity}">
                    <h3>${event.title}</h3>
                    <p class="event-date">${event.year}</p>
                    <p>${event.description}</p>
                    <p class="wissa-role"><strong>دور القمص ويصا:</strong> ${event.wissa_role}</p>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    },
    
    // Render Media
    renderMedia(data) {
        const container = document.getElementById('media-container');
        if (!container) return;
        
        // Gallery will be rendered based on available media files
        container.innerHTML = '<p>معرض الوسائط قيد البناء...</p>';
    },
    
    // Render Sources
    renderSources(data) {
        const container = document.getElementById('sources-container');
        if (!container) return;
        
        const sources = data.sources || {};
        
        let html = '<div class="sources-list">';
        
        // Published Sources
        if (sources.published_sources) {
            html += '<h3>المصادر المنشورة</h3>';
            sources.published_sources.forEach(source => {
                html += `
                    <div class="source-item ${source.reliability}">
                        <h4>${source.title}</h4>
                        <p><strong>المصدر:</strong> ${source.outlet || source.url}</p>
                        <p><strong>الموثوقية:</strong> ${source.reliability}</p>
                        ${source.url ? `<a href="${source.url}" target="_blank" rel="noopener">اقرأ المصدر</a>` : ''}
                    </div>
                `;
            });
        }
        
        // Archive Sources
        if (sources.family_archive_sources) {
            html += '<h3>أرشيف الأسرة</h3>';
            sources.family_archive_sources.forEach(source => {
                html += `
                    <div class="source-item archive">
                        <h4>${source.id}</h4>
                        <p><strong>النوع:</strong> ${source.type}</p>
                        <p><strong>الموثوقية:</strong> ${source.reliability}</p>
                    </div>
                `;
            });
        }
        
        html += '</div>';
        container.innerHTML = html;
    },
    
    // Initialize Search Index
    initializeSearchIndex(data) {
        // Will use Lunr.js for full-text search
        console.log('Search index initialized with:', data);
    },
    
    // Format Date
    formatDate(event) {
        if (event.date_arabic) {
            return event.date_arabic;
        }
        
        const months = {
            1: 'يناير',
            2: 'فبراير',
            3: 'مارس',
            4: 'أبريل',
            5: 'مايو',
            6: 'يونيو',
            7: 'يوليو',
            8: 'أغسطس',
            9: 'سبتمبر',
            10: 'أكتوبر',
            11: 'نوفمبر',
            12: 'ديسمبر'
        };
        
        let dateStr = `${event.year}`;
        if (event.month) {
            dateStr = `${event.day || ''} ${months[event.month]} ${event.year}`.trim();
        }
        
        return dateStr;
    },
    
    // Setup Hero Animations
    setupHeroAnimations() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        // Trigger fade-in animation
        hero.classList.add('fade-in');
    },
    
    // Setup Scroll Animations
    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        });
        
        document.querySelectorAll('.event-card, .info-card, .feature').forEach(el => {
            observer.observe(el);
        });
    },
    
    // Handle Responsive
    handleResponsive() {
        // Adjust layout based on screen size
        const isMobile = window.innerWidth < 768;
        
        if (isMobile) {
            // Mobile adjustments
            console.log('Mobile view');
        } else {
            // Desktop adjustments
            console.log('Desktop view');
        }
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    APP.init();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP;
}
