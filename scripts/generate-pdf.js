const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const ROOT = path.join(__dirname, '..');
const EXPORTS = path.join(ROOT, 'exports');
const DATA = path.join(ROOT, 'data');

function readJson(name) {
  return JSON.parse(fs.readFileSync(path.join(DATA, name), 'utf8'));
}

function generateBiographyPDF() {
  return new Promise((resolve, reject) => {
    try {
      fs.mkdirSync(EXPORTS, { recursive: true });
      const biography = readJson('biography.json');
      const timeline = readJson('timeline.json');
      const doc = new PDFDocument({ margin: 50 });
      const output = path.join(EXPORTS, 'wissa-sobhy-biography.pdf');
      const stream = fs.createWriteStream(output);

      stream.on('finish', () => resolve(output));
      stream.on('error', reject);
      doc.pipe(stream);

      doc.fontSize(20).font('Courier-Bold').text('سيرة القمص ويصا صبحي تادرس', { align: 'center' });
      doc.moveDown();
      doc.fontSize(11).font('Courier').text(`آخر تحديث: ${biography.metadata?.last_updated || 'غير محدد'}`, { align: 'center' });
      doc.moveDown(2);

      doc.fontSize(14).font('Courier-Bold').text('البيانات الأساسية');
      doc.moveDown(0.5);
      const identity = biography.identity || {};
      [
        ['الاسم', identity.name_ar || 'القمص ويصا صبحي تادرس'],
        ['تاريخ الميلاد', identity.birth_date || 'غير محدد'],
        ['مكان الميلاد', identity.birth_place || 'غير محدد'],
        ['الخدمة الحالية', identity.current_role_ar || 'كاهن كنيسة السيدة العذراء بديرمواس'],
        ['الخدمة السابقة', identity.former_role_ar || 'وكيل إيبارشية ديرمواس ودلجا، 1991–2025']
      ].forEach(([label, value]) => doc.fontSize(10).font('Courier').text(`${label}: ${value}`));

      doc.moveDown();
      doc.fontSize(14).font('Courier-Bold').text('الوصايا الروحية', { underline: true });
      doc.fontSize(11).font('Courier');
      doc.text('- الرعاية الروحية والافتقاد');
      doc.text('- إدارة المشاريع العمرانية');
      doc.text('- التوثيق والخدمة الإدارية');
      doc.text('- التمثيل الإعلامي');
      doc.moveDown();

      doc.addPage();
      doc.fontSize(14).font('Courier-Bold').text('الخط الزمني الكامل', { align: 'center' });
      doc.moveDown();

      (timeline.timeline || []).slice(0, 20).forEach((event) => {
        doc.fontSize(10).font('Courier-Bold').text(`${event.date_arabic || event.year}:`, { align: 'left' });
        doc.fontSize(9).font('Courier').text(`  ${event.title}`, { align: 'left' });
        doc.fontSize(8).text(`  ${event.description || ''}`, { align: 'left' });
        doc.moveDown(0.3);
      });

      doc.fontSize(8).text('... وغيرها المزيد من الأحداث ...');
      doc.moveDown();
      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

generateBiographyPDF()
  .then((file) => console.log(`✓ تم إنشاء: ${file}`))
  .catch((error) => {
    console.error('❌ خطأ أثناء إنشاء ملفات PDF:', error);
    process.exitCode = 1;
  });
