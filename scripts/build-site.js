#!/usr/bin/env node

/**
 * Build Script - بسيط وفعّال
 * ينسخ الملفات من website/ إلى dist/
 */

const fs = require('fs');
const path = require('path');

const BUILD_CONFIG = {
    websiteDir: path.join(__dirname, '../website'),
    outputDir: path.join(__dirname, '../dist'),
    dataDir: path.join(__dirname, '../data')
};

console.log('📝 بدء البناء...');

// 1. حذف مجلد dist القديم
if (fs.existsSync(BUILD_CONFIG.outputDir)) {
    fs.rmSync(BUILD_CONFIG.outputDir, { recursive: true });
    console.log('✅ حذف مجلد dist القديم');
}

// 2. إنشاء مجلد dist جديد
fs.mkdirSync(BUILD_CONFIG.outputDir, { recursive: true });
console.log('✅ إنشاء مجلد dist');

// 3. دالة نسخ مجلد بالكامل
function copyDir(src, dest) {
    if (!fs.existsSync(src)) {
        console.warn(`⚠️  المجلد غير موجود: ${src}`);
        return;
    }

    fs.mkdirSync(dest, { recursive: true });
    const files = fs.readdirSync(src);

    files.forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        const stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
}

// 4. نسخ الملفات من website إلى dist
console.log('📋 نسخ ملفات الموقع...');

// نسخ HTML
const htmlFiles = fs.readdirSync(BUILD_CONFIG.websiteDir)
    .filter(f => f.endsWith('.html'));
htmlFiles.forEach(file => {
    fs.copyFileSync(
        path.join(BUILD_CONFIG.websiteDir, file),
        path.join(BUILD_CONFIG.outputDir, file)
    );
});
console.log(`✅ نسخ ${htmlFiles.length} ملف HTML`);

// نسخ CSS
if (fs.existsSync(path.join(BUILD_CONFIG.websiteDir, 'css'))) {
    copyDir(
        path.join(BUILD_CONFIG.websiteDir, 'css'),
        path.join(BUILD_CONFIG.outputDir, 'css')
    );
    console.log('✅ نسخ ملفات CSS');
}

// نسخ JavaScript
if (fs.existsSync(path.join(BUILD_CONFIG.websiteDir, 'js'))) {
    copyDir(
        path.join(BUILD_CONFIG.websiteDir, 'js'),
        path.join(BUILD_CONFIG.outputDir, 'js')
    );
    console.log('✅ نسخ ملفات JavaScript');
}

// نسخ البيانات (data folder)
if (fs.existsSync(BUILD_CONFIG.dataDir)) {
    copyDir(BUILD_CONFIG.dataDir, path.join(BUILD_CONFIG.outputDir, 'data'));
    console.log('✅ نسخ ملفات البيانات');
}

// 5. إنشاء ملف metadata
const metadata = {
    buildTime: new Date().toISOString(),
    version: '2.0.0',
    project: 'wissa-sobhy-archive',
    filesCount: {
        html: htmlFiles.length,
        css: fs.existsSync(path.join(BUILD_CONFIG.outputDir, 'css')) ? 
            fs.readdirSync(path.join(BUILD_CONFIG.outputDir, 'css')).length : 0,
        js: fs.existsSync(path.join(BUILD_CONFIG.outputDir, 'js')) ? 
            fs.readdirSync(path.join(BUILD_CONFIG.outputDir, 'js')).length : 0
    }
};

fs.writeFileSync(
    path.join(BUILD_CONFIG.outputDir, 'build.json'),
    JSON.stringify(metadata, null, 2)
);
console.log('✅ إنشاء ملف metadata');

// 6. التحقق من وجود dist
const distContents = fs.readdirSync(BUILD_CONFIG.outputDir);
console.log('\n='.repeat(50));
console.log('✅ البناء اكتمل بنجاح!');
console.log('='.repeat(50));
console.log(`📁 مجلد الإخراج: ${BUILD_CONFIG.outputDir}`);
console.log(`📄 عدد الملفات: ${distContents.length}`);
console.log(`⏱️  الوقت: ${new Date().toLocaleTimeString('ar-EG')}`);
console.log('='.repeat(50));
console.log('\n✅ جاهز للنشر على Vercel!');

process.exit(0);
