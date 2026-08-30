#!/usr/bin/env node

/**
 * أرشيف القمص ويصا صبحي
 * Build Script - يبني الموقع الثابت
 * v2.0.0
 */

const fs = require('fs');
const path = require('path');

const BUILD_CONFIG = {
    name: 'وissa-sobhy-archive-builder',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    
    // Paths
    dataDir: path.join(__dirname, '../data'),
    contentDir: path.join(__dirname, '../content'),
    websiteDir: path.join(__dirname, '../website'),
    outputDir: path.join(__dirname, '../dist'),
    
    // Settings
    minify: process.env.NODE_ENV === 'production',
    sourceMap: process.env.NODE_ENV !== 'production',
    watch: process.argv.includes('--watch')
};

// Logging utilities
const logger = {
    info: (msg) => console.log(`ℹ️  ${msg}`),
    success: (msg) => console.log(`✅ ${msg}`),
    error: (msg) => console.error(`❌ ${msg}`),
    warn: (msg) => console.warn(`⚠️  ${msg}`),
    log: (msg) => console.log(`📝 ${msg}`)
};

// Main builder
class SiteBuilder {
    constructor(config) {
        this.config = config;
        this.stats = {
            filesProcessed: 0,
            startTime: Date.now(),
            errors: []
        };
    }

    // Initialize build
    async build() {
        logger.info(`بناء الموقع - الإصدار ${this.config.version}`);
        logger.info(`الوقت: ${this.config.timestamp}`);
        
        try {
            // Step 1: Validate data
            await this.validateData();
            
            // Step 2: Create output directory
            this.createOutputDir();
            
            // Step 3: Copy static files
            await this.copyStaticFiles();
            
            // Step 4: Build HTML pages
            await this.buildPages();
            
            // Step 5: Process CSS & JS
            await this.processAssets();
            
            // Step 6: Generate metadata
            await this.generateMetadata();
            
            // Success message
            this.printSuccess();
            
        } catch (error) {
            logger.error(`فشل البناء: ${error.message}`);
            process.exit(1);
        }
    }

    // Validate data files
    async validateData() {
        logger.log('التحقق من ملفات البيانات...');
        
        const requiredFiles = [
            'biography.json',
            'timeline.json',
            'events.json',
            'sources.json'
        ];
        
        for (const file of requiredFiles) {
            const filePath = path.join(this.config.dataDir, file);
            if (!fs.existsSync(filePath)) {
                throw new Error(`ملف مفقود: ${file}`);
            }
            
            try {
                const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                logger.success(`✓ ${file} (صالح)`);
            } catch (e) {
                throw new Error(`خطأ في parsing ${file}: ${e.message}`);
            }
        }
    }

    // Create output directory
    createOutputDir() {
        if (!fs.existsSync(this.config.outputDir)) {
            fs.mkdirSync(this.config.outputDir, { recursive: true });
            logger.success(`تم إنشاء مجلد الإخراج: ${this.config.outputDir}`);
        }
    }

    // Copy static files
    async copyStaticFiles() {
        logger.log('نسخ الملفات الثابتة...');
        
        const staticDir = path.join(this.config.websiteDir, 'css');
        const destDir = path.join(this.config.outputDir, 'css');
        
        if (fs.existsSync(staticDir)) {
            fs.cpSync(staticDir, destDir, { recursive: true });
            logger.success(`تم نسخ ملفات CSS`);
        }
        
        const jsDir = path.join(this.config.websiteDir, 'js');
        const jsDest = path.join(this.config.outputDir, 'js');
        
        if (fs.existsSync(jsDir)) {
            fs.cpSync(jsDir, jsDest, { recursive: true });
            logger.success(`تم نسخ ملفات JavaScript`);
        }
    }

    // Build HTML pages
    async buildPages() {
        logger.log('بناء صفحات HTML...');
        
        const pages = [
            'index.html',
            'biography.html',
            'timeline.html',
            'events.html',
            'media.html',
            'sources.html',
            'search.html'
        ];
        
        for (const page of pages) {
            const srcPath = path.join(this.config.websiteDir, page);
            if (fs.existsSync(srcPath)) {
                const destPath = path.join(this.config.outputDir, page);
                fs.copyFileSync(srcPath, destPath);
                this.stats.filesProcessed++;
                logger.success(`✓ بناء ${page}`);
            }
        }
    }

    // Process CSS & JS
    async processAssets() {
        logger.log('معالجة المجموعات...');
        
        // Minify CSS if in production
        if (this.config.minify) {
            logger.log('تصغير ملفات CSS...');
            // Minification logic would go here
        }
        
        logger.success('تمت معالجة المجموعات');
    }

    // Generate metadata
    async generateMetadata() {
        logger.log('توليد البيانات الوصفية...');
        
        const metadata = {
            buildDate: this.config.timestamp,
            version: this.config.version,
            filesProcessed: this.stats.filesProcessed,
            production: this.config.minify,
            repository: 'https://github.com/BishoElkomos/wissa-sobhy-archive'
        };
        
        const metaPath = path.join(this.config.outputDir, 'build-info.json');
        fs.writeFileSync(metaPath, JSON.stringify(metadata, null, 2));
        
        logger.success('تم توليد البيانات الوصفية');
    }

    // Print success summary
    printSuccess() {
        const buildTime = ((Date.now() - this.stats.startTime) / 1000).toFixed(2);
        
        console.log('\n' + '='.repeat(50));
        logger.success(`بناء الموقع نجح!`);
        console.log('='.repeat(50));
        logger.log(`📁 مجلد الإخراج: ${this.config.outputDir}`);
        logger.log(`📄 الملفات المعالجة: ${this.stats.filesProcessed}`);
        logger.log(`⏱️  وقت البناء: ${buildTime} ثانية`);
        logger.log(`📅 الوقت: ${new Date().toLocaleString('ar-EG')}`);
        console.log('='.repeat(50) + '\n');
        
        if (this.stats.errors.length > 0) {
            logger.warn('تحذيرات:');
            this.stats.errors.forEach(err => logger.warn(`  - ${err}`));
        }
    }
}

// Run builder
const builder = new SiteBuilder(BUILD_CONFIG);
builder.build().catch(err => {
    logger.error(err.message);
    process.exit(1);
});
