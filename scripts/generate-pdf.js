#!/usr/bin/env node

/**
 * توليد ملفات PDF من بيانات الأرشيف
 * يستخدم PDFKit و Marked
 */

const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const marked = require('marked');

// تحميل البيانات
const biography = require('../data/biography.json');
const timeline = require('../data/timeline.json');
const sources = require('../data/sources.json');

// إعدادات PDF
const pdfDir = path.join(__dirname, '../exports');
if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true });
}

// إنشاء مجلد النتائج إذا لم يكن موجود
if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true });
}

/**
 * 1. توليد ملف السيرة بصيغة PDF
 */
function generateBiographyPDF() {
    return new Promise((resolve, reject) => {
        try {
            const doc = new PDFDocument({
                size: 'A4',
                margin: 40,
                bufferPages: true
            });

            const outputPath = path.join(pdfDir, 'wissa-sobhy-biography.pdf');
            const stream = fs.createWriteStream(outputPath);

            doc.pipe(stream);

            // الرأس
            doc.fontSize(24).font('Courier-Bold').text('القمص ويصا صبحي تادرس', { align: 'center' });
            doc.fontSize(14).text('السيرة الشاملة والموثقة', { align: 'center' });
            doc.fontSize(10).text('أرشيف رقمي 2026', { align: 'center' });
            doc.moveDown();

            // البيانات الأساسية
            doc.fontSize(12).font('Courier-Bold').text('البيانات الأساسية', { underline: true });
            doc.fontSize(11).font('Courier');
            
            const person = biography.person;
            doc.text(`الاسم الكامل: ${person.name_arabic}`);
            doc.text(`الاسم العلماني: ${person.secular_name}`);
            doc.text(`الموقع الحالي: ${person.title}`);
            doc.moveDown();

            // الميلاد
            const birth = biography.birth;
            doc.fontSize(12).font('Courier-Bold').text('الميلاد', { underline: true });
            doc.fontSize(11).font('Courier');
            doc.text(`التاريخ: ${birth.date}`);
            doc.text(`المكان: ${birth.place}`);
            doc.moveDown();

            // التعليم
            doc.fontSize(12).font('Courier-Bold').text('التعليم', { underline: true });
            doc.fontSize(11).font('Courier');
            const edu = biography.education;
            doc.text(`بكالوريوس: ${edu.bachelor.degree} - ${edu.bachelor.year}`);
            doc.text(`جامعة: ${edu.bachelor.university}`);
            doc.moveDown();

            // السيامة والخدمة
            doc.fontSize(12).font('Courier-Bold').text('السيامة الكهنوتية', { underline: true });
            doc.fontSize(11).font('Courier');
            const priesthood = biography.ecclesiastical_career.priesthood;
            doc.text(`تاريخ السيامة: ${priesthood.date}`);
            doc.text(`نوع السيامة: كاهن`);
            doc.text(`رتبة القمصية: ${biography.ecclesiastical_career.elevation_to_abuna.date}`);
            doc.moveDown();

            // الوصايا الروحية
            doc.fontSize(12).font('Courier-Bold').text('الوصايا الروحية', { underline: true });
            doc.fontSize(11).font('Courier');
            doc.text(`- الرعاية الروحية والافتقاد`);
            doc.text(`- إدارة المشاريع العمرانية`);
            doc.text(`- التوثيق والخدمة الإدارية`);
            doc.text(`- التمثيل الإعلامي`);
            doc.moveDown();

            // الخط الزمني
            doc.addPage();
            doc.fontSize(14).font('Courier-Bold').text('الخط الزمني الكامل', { align: 'center' });
            doc.moveDown();

            timeline.timeline.slice(0, 20).forEach((event, index) => {
                doc.fontSize(10).font('Courier-Bold').text(`${event.date_arabic || event.year}:`, 'left');
                doc.fontSize(9).font('Courier').text(`  ${event.title}`, 'left');
                doc.fontSize(8).text(`  ${event.description}`, 'left');
                doc.moveDown(0.3);
            });

            doc.fontSize(8).text('... وغيرها المزيد من الأحداث ...');
            doc.moveDown();

            // الصفحة الأخيرة - المصادر
            doc.addPage();
            doc.fontSize(14).font('Courier-Bold').text('المصادر الموثوقة', { align: 'center' });
            doc.moveDown();

            sources.sources.published_sources.forEach((source) => {
                doc.fontSize(10).font('Courier-Bold').text(source.title);
                doc.fontSize(9).font('Courier').text(`المصدر: ${source.outlet || source.url}`);
                doc.text(`الموثوقية: ${source.reliability}`);
                doc.moveDown(0.5);
            });

            // الفوتر
            doc.fontSize(8).text('---', 'center');
            doc.text('© 2026 أرشيف القمص ويصا صبحي تادرس', 'center');
            doc.text('CC-BY-SA 4.0 | https://github.com/BishoElkomos/wissa-sobhy-archive', 'center');

            doc.end();

            stream.on('finish', () => {
                console.log('✓ ملف السيرة PDF تم إنشاؤه بنجاح');
                console.log(`  📄 ${outputPath}`);
                resolve(outputPath);
            });

            stream.on('error', reject);
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * 2. توليد ملف الخط الزمني بصيغة PDF
 */
function generateTimelinePDF() {
    return new Promise((resolve, reject) => {
        try {
            const doc = new PDFDocument({
                size: 'A4',
                margin: 40,
                bufferPages: true
            });

            const outputPath = path.join(pdfDir, 'wissa-sobhy-timeline.pdf');
            const stream = fs.createWriteStream(outputPath);

            doc.pipe(stream);

            // الرأس
            doc.fontSize(20).font('Courier-Bold').text('خط زمني شامل', { align: 'center' });
            doc.fontSize(14).text('سيرة القمص ويصا صبحي تادرس 1991-2026', { align: 'center' });
            doc.moveDown();

            // الأحداث الزمنية
            timeline.timeline.forEach((event) => {
                const color = event.verified ? '0x1a472a' : '0x999999';
                
                doc.fontSize(11).font('Courier-Bold').text(
                    event.date_arabic || `${event.year}`,
                    { color }
                );
                doc.fontSize(10).font('Courier').text(event.title);
                doc.fontSize(9).text(event.description);
                
                if (event.sources && event.sources.length > 0) {
                    doc.fontSize(8).font('Courier').text(
                        `المصدر: ${event.sources.join(', ')}`
                    );
                }
                
                doc.moveDown();

                // فاصل بين الأحداث
                if (timeline.timeline.indexOf(event) % 5 === 0 && event !== timeline.timeline[timeline.timeline.length - 1]) {
                    doc.addPage();
                }
            });

            // الفوتر
            doc.fontSize(8).text('---', 'center');
            doc.text('© 2026 أرشيف القمص ويصا صبحي تادرس', 'center');

            doc.end();

            stream.on('finish', () => {
                console.log('✓ ملف الخط الزمني PDF تم إنشاؤه بنجاح');
                console.log(`  📄 ${outputPath}`);
                resolve(outputPath);
            });

            stream.on('error', reject);
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * 3. توليد ملف المصادر PDF
 */
function generateSourcesPDF() {
    return new Promise((resolve, reject) => {
        try {
            const doc = new PDFDocument({
                size: 'A4',
                margin: 40
            });

            const outputPath = path.join(pdfDir, 'wissa-sobhy-sources.pdf');
            const stream = fs.createWriteStream(outputPath);

            doc.pipe(stream);

            // الرأس
            doc.fontSize(20).font('Courier-Bold').text('المصادر الموثوقة', { align: 'center' });
            doc.fontSize(12).text('قائمة كاملة للمصادر المستخدمة في الأرشيف', { align: 'center' });
            doc.moveDown();

            // المصادر المنشورة
            doc.fontSize(14).font('Courier-Bold').text('المصادر المنشورة', { underline: true });
            doc.moveDown();

            sources.sources.published_sources.forEach((source, index) => {
                doc.fontSize(11).font('Courier-Bold').text(`${index + 1}. ${source.title}`);
                doc.fontSize(10).font('Courier').text(`المصدر: ${source.outlet || 'Online'}`);
                doc.text(`الموثوقية: ${source.reliability}`);
                
                if (source.url) {
                    doc.fontSize(9).text(`الرابط: ${source.url}`);
                }
                
                if (source.date_published) {
                    doc.text(`التاريخ: ${source.date_published}`);
                }

                doc.text(`التغطية: ${source.coverage.join(', ')}`);
                doc.moveDown(0.5);
            });

            // مصادر الأرشيف العائلي
            doc.addPage();
            doc.fontSize(14).font('Courier-Bold').text('أرشيف الأسرة', { underline: true });
            doc.moveDown();

            sources.sources.family_archive_sources.forEach((source) => {
                doc.fontSize(11).font('Courier-Bold').text(source.id);
                doc.fontSize(10).font('Courier').text(`النوع: ${source.type}`);
                doc.text(`الموثوقية: ${source.reliability}`);
                doc.moveDown(0.3);
            });

            // الفوتر
            doc.fontSize(8).text('---', 'center');
            doc.text('© 2026 أرشيف القمص ويصا صبحي تادرس', 'center');

            doc.end();

            stream.on('finish', () => {
                console.log('✓ ملف المصادر PDF تم إنشاؤه بنجاح');
                console.log(`  📄 ${outputPath}`);
                resolve(outputPath);
            });

            stream.on('error', reject);
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * تشغيل جميع عمليات التوليد
 */
async function generateAllPDFs() {
    console.log('🔄 جاري توليد ملفات PDF...\n');

    try {
        await Promise.all([
            generateBiographyPDF(),
            generateTimelinePDF(),
            generateSourcesPDF()
        ]);

        console.log('\n✅ تم إنشاء جميع ملفات PDF بنجاح!');
        console.log(`📁 المجلد: ${pdfDir}`);
    } catch (error) {
        console.error('❌ خطأ أثناء إنشاء ملفات PDF:', error);
        process.exit(1);
    }
}

// تشغيل البرنامج
if (require.main === module) {
    generateAllPDFs();
}

module.exports = {
    generateBiographyPDF,
    generateTimelinePDF,
    generateSourcesPDF,
    generateAllPDFs
};
