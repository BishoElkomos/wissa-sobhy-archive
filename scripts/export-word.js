#!/usr/bin/env node

/**
 * توليد ملفات Word (DOCX) من بيانات الأرشيف
 * يستخدم docx library
 */

const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, UnderlineType, VerticalAlign } = require('docx');
const fs = require('fs');
const path = require('path');

// تحميل البيانات
const biography = require('../data/biography.json');
const timeline = require('../data/timeline.json');
const events = require('../data/events.json');
const sources = require('../data/sources.json');

// إعدادات
const docDir = path.join(__dirname, '../exports');
if (!fs.existsSync(docDir)) {
    fs.mkdirSync(docDir, { recursive: true });
}

/**
 * 1. توليد ملف السيرة بصيغة Word
 */
async function generateBiographyWord() {
    try {
        const sections = [];
        const person = biography.person;
        const birth = biography.birth;
        const edu = biography.education;
        const career = biography.ecclesiastical_career;

        // الرأس
        sections.push(
            new Paragraph({
                text: person.name_arabic,
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: person.title,
                heading: HeadingLevel.HEADING_2,
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 }
            })
        );

        // البيانات الأساسية
        sections.push(
            new Paragraph({
                text: 'البيانات الأساسية',
                heading: HeadingLevel.HEADING_2,
                underline: { type: UnderlineType.SINGLE }
            }),
            new Paragraph({
                text: `الاسم الكامل: ${person.name_arabic}`,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: `الاسم العلماني: ${person.secular_name}`,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: `الموقع الحالي: ${person.title}`,
                spacing: { after: 400 }
            })
        );

        // الميلاد
        sections.push(
            new Paragraph({
                text: 'الميلاد',
                heading: HeadingLevel.HEADING_2,
                underline: { type: UnderlineType.SINGLE }
            }),
            new Paragraph({
                text: `التاريخ: ${birth.date}`,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: `المكان: ${birth.place}`,
                spacing: { after: 400 }
            })
        );

        // التعليم
        sections.push(
            new Paragraph({
                text: 'التعليم',
                heading: HeadingLevel.HEADING_2,
                underline: { type: UnderlineType.SINGLE }
            }),
            new Paragraph({
                text: `بكالوريوس: ${edu.bachelor.degree}`,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: `السنة: ${edu.bachelor.year}`,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: `الجامعة: ${edu.bachelor.university}`,
                spacing: { after: 400 }
            })
        );

        // السيامة الكهنوتية
        sections.push(
            new Paragraph({
                text: 'السيامة الكهنوتية والخدمة',
                heading: HeadingLevel.HEADING_2,
                underline: { type: UnderlineType.SINGLE }
            }),
            new Paragraph({
                text: `تاريخ السيامة: ${career.priesthood.date}`,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: `رفع درجة القمصية: ${career.elevation_to_abuna.date}`,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: `الخدمة الحالية: منذ عام 1991 (35 سنة)`,
                spacing: { after: 400 }
            })
        );

        // مجالات الخدمة
        sections.push(
            new Paragraph({
                text: 'مجالات الخدمة',
                heading: HeadingLevel.HEADING_2,
                underline: { type: UnderlineType.SINGLE }
            }),
            new Paragraph({
                text: '✓ الرعاية الروحية والافتقاد',
                spacing: { after: 50 }
            }),
            new Paragraph({
                text: '✓ إدارة المشاريع العمرانية',
                spacing: { after: 50 }
            }),
            new Paragraph({
                text: '✓ التوثيق والأحوال الشخصية',
                spacing: { after: 50 }
            }),
            new Paragraph({
                text: '✓ التمثيل الإعلامي للمطرانية',
                spacing: { after: 50 }
            }),
            new Paragraph({
                text: '✓ التواصل مع المؤسسات الحكومية',
                spacing: { after: 400 }
            })
        );

        // الأحداث الرئيسية
        sections.push(
            new Paragraph({
                text: 'الأحداث الرئيسية',
                heading: HeadingLevel.HEADING_2,
                underline: { type: UnderlineType.SINGLE }
            })
        );

        events.major_events.forEach((event) => {
            sections.push(
                new Paragraph({
                    text: `• ${event.year}: ${event.title}`,
                    spacing: { after: 50 }
                })
            );
        });

        // الفوتر
        sections.push(
            new Paragraph({
                text: '',
                spacing: { after: 200 }
            }),
            new Paragraph({
                text: '---',
                alignment: AlignmentType.CENTER,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: '© 2026 أرشيف القمص ويصا صبحي تادرس',
                alignment: AlignmentType.CENTER,
                spacing: { after: 50 }
            }),
            new Paragraph({
                text: 'CC-BY-SA 4.0 | https://github.com/BishoElkomos/wissa-sobhy-archive',
                alignment: AlignmentType.CENTER,
                fontSize: 10
            })
        );

        const doc = new Document({
            sections: [{
                children: sections,
                properties: {
                    page: {
                        margin: { top: 1000, right: 1000, bottom: 1000, left: 1000 }
                    }
                }
            }]
        });

        const outputPath = path.join(docDir, 'wissa-sobhy-biography.docx');
        const bytes = await Packer.toBuffer(doc);
        fs.writeFileSync(outputPath, bytes);

        console.log('✓ ملف السيرة Word تم إنشاؤه بنجاح');
        console.log(`  📄 ${outputPath}`);
        return outputPath;
    } catch (error) {
        console.error('❌ خطأ أثناء إنشاء ملف Word للسيرة:', error);
        throw error;
    }
}

/**
 * 2. توليد ملف الخط الزمني بصيغة Word
 */
async function generateTimelineWord() {
    try {
        const sections = [];

        // الرأس
        sections.push(
            new Paragraph({
                text: 'الخط الزمني الشامل',
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: 'سيرة القمص ويصا صبحي تادرس 1991-2026',
                heading: HeadingLevel.HEADING_2,
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 }
            })
        );

        // الأحداث
        timeline.timeline.forEach((event) => {
            const dateStr = event.date_arabic || event.year;
            
            sections.push(
                new Paragraph({
                    text: `${dateStr} - ${event.title}`,
                    heading: HeadingLevel.HEADING_3,
                    spacing: { after: 50 }
                }),
                new Paragraph({
                    text: event.description,
                    spacing: { after: 200 }
                })
            );
        });

        // الفوتر
        sections.push(
            new Paragraph({
                text: '---',
                alignment: AlignmentType.CENTER,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: '© 2026 أرشيف القمص ويصا صبحي تادرس',
                alignment: AlignmentType.CENTER
            })
        );

        const doc = new Document({
            sections: [{
                children: sections,
                properties: {
                    page: {
                        margin: { top: 1000, right: 1000, bottom: 1000, left: 1000 }
                    }
                }
            }]
        });

        const outputPath = path.join(docDir, 'wissa-sobhy-timeline.docx');
        const bytes = await Packer.toBuffer(doc);
        fs.writeFileSync(outputPath, bytes);

        console.log('✓ ملف الخط الزمني Word تم إنشاؤه بنجاح');
        console.log(`  📄 ${outputPath}`);
        return outputPath;
    } catch (error) {
        console.error('❌ خطأ أثناء إنشاء ملف Word للخط الزمني:', error);
        throw error;
    }
}

/**
 * 3. توليد جدول المصادر
 */
async function generateSourcesWord() {
    try {
        const sections = [];

        // الرأس
        sections.push(
            new Paragraph({
                text: 'المصادر الموثوقة',
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: 'قائمة كاملة للمصادر المستخدمة في الأرشيف',
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 }
            })
        );

        // جدول المصادر
        const tableRows = [
            new TableRow({
                children: [
                    new TableCell({ text: 'العنوان' }),
                    new TableCell({ text: 'المصدر' }),
                    new TableCell({ text: 'الموثوقية' }),
                    new TableCell({ text: 'التاريخ' })
                ]
            })
        ];

        sources.sources.published_sources.forEach((source) => {
            tableRows.push(
                new TableRow({
                    children: [
                        new TableCell({ text: source.title }),
                        new TableCell({ text: source.outlet || 'Online' }),
                        new TableCell({ text: source.reliability }),
                        new TableCell({ text: source.date_published || 'N/A' })
                    ]
                })
            );
        });

        sections.push(
            new Table({
                rows: tableRows,
                width: { size: 100, type: 'pct' }
            })
        );

        // الفوتر
        sections.push(
            new Paragraph({
                text: '',
                spacing: { after: 200 }
            }),
            new Paragraph({
                text: '© 2026 أرشيف القمص ويصا صبحي تادرس',
                alignment: AlignmentType.CENTER
            })
        );

        const doc = new Document({
            sections: [{
                children: sections,
                properties: {
                    page: {
                        margin: { top: 1000, right: 1000, bottom: 1000, left: 1000 }
                    }
                }
            }]
        });

        const outputPath = path.join(docDir, 'wissa-sobhy-sources.docx');
        const bytes = await Packer.toBuffer(doc);
        fs.writeFileSync(outputPath, bytes);

        console.log('✓ ملف المصادر Word تم إنشاؤه بنجاح');
        console.log(`  📄 ${outputPath}`);
        return outputPath;
    } catch (error) {
        console.error('❌ خطأ أثناء إنشاء ملف Word للمصادر:', error);
        throw error;
    }
}

/**
 * تشغيل جميع عمليات التوليد
 */
async function generateAllWord() {
    console.log('🔄 جاري توليد ملفات Word...\n');

    try {
        await Promise.all([
            generateBiographyWord(),
            generateTimelineWord(),
            generateSourcesWord()
        ]);

        console.log('\n✅ تم إنشاء جميع ملفات Word بنجاح!');
        console.log(`📁 المجلد: ${docDir}`);
    } catch (error) {
        console.error('❌ خطأ أثناء إنشاء ملفات Word:', error);
        process.exit(1);
    }
}

// تشغيل البرنامج
if (require.main === module) {
    generateAllWord();
}

module.exports = {
    generateBiographyWord,
    generateTimelineWord,
    generateSourcesWord,
    generateAllWord
};
