# 📋 شرح بنية المستودع

## البنية العامة

```
wissa-sobhy-archive/
│
├── 📄 README.md                    (الملف الرئيسي - ابدأ من هنا)
├── 📄 STRUCTURE.md                 (هذا الملف)
├── 📄 METHODOLOGY.md               (منهج البحث والتوثيق)
├── 📄 CONTRIBUTE.md                (كيفية المساهمة)
├── 📄 LICENSE                      (الترخيص CC-BY-SA)
├── 📄 package.json                 (إعدادات المشروع)
├── 📄 .gitignore                   (ملفات يتجاهلها Git)
│
├── 📊 data/
│   ├── biography.json              (السيرة الكاملة منسقة)
│   ├── timeline.json               (الخط الزمني - 43 حدث)
│   ├── events.json                 (الأحداث الرئيسية)
│   ├── sources.json                (قائمة المصادر الموثقة)
│   ├── people.json                 (الأشخاص المرتبطين)
│   ├── places.json                 (الأماكن الجغرافية)
│   └── media-index.json            (فهرس الوسائط)
│
├── 📁 media/
│   ├── 📷 photos/                  (معرض الصور)
│   │   ├── ordination-1991/
│   │   ├── service-1991-2013/
│   │   ├── deir-mawas-churches/
│   │   ├── events-2007-2026/
│   │   └── INDEX.md
│   │
│   ├── 📄 documents/               (الوثائق والشهادات)
│   │   ├── certificates/
│   │   ├── press-coverage/
│   │   ├── church-records/
│   │   └── INDEX.md
│   │
│   ├── 🎬 videos/                  (الفيديوهات والتسجيلات)
│   │   ├── interviews/
│   │   ├── events/
│   │   └── INDEX.md
│   │
│   └── 📻 audio/                   (التسجيلات الصوتية)
│       ├── sermons/
│       ├── testimony/
│       └── INDEX.md
│
├── 📖 content/                     (المحتوى النصي Markdown)
│   ├── biography/
│   │   ├── 01-early-life.md        (النشأة 1956-1988)
│   │   ├── 02-priesthood.md        (السيامة 1991-1997)
│   │   ├── 03-ministry.md          (الخدمة 1997-2025)
│   │   ├── 04-witness.md           (الشهادات 2007-2026)
│   │   └── index.md                (فهرس السيرة)
│   │
│   ├── events/
│   │   ├── 2007-land-dispute.md    (النزاع العقاري)
│   │   ├── 2010-kamilia-shehata.md (أزمة كاميليا)
│   │   ├── 2013-attacks.md         (الهجمات الطائفية)
│   │   ├── 2014-reconstruction.md  (إعادة الإعمار)
│   │   ├── 2025-transition.md      (سنة الانتقال)
│   │   └── index.md                (فهرس الأحداث)
│   │
│   ├── relationships/
│   │   ├── anba-agabius.md         (العلاقة مع الأنبا أغابيوس)
│   │   ├── nader-shokry.md         (التغطية الصحفية)
│   │   └── index.md
│   │
│   └── analysis/
│       ├── deir-mawas-history.md
│       ├── coptic-crises.md
│       └── index.md
│
├── 🌐 website/                     (ملفات الموقع التفاعلي)
│   ├── index.html                  (الصفحة الرئيسية)
│   ├── biography.html              (صفحة السيرة)
│   ├── timeline.html               (الخط الزمني التفاعلي)
│   ├── events.html                 (صفحة الأحداث)
│   ├── media.html                  (معرض الوسائط)
│   ├── sources.html                (قائمة المصادر)
│   ├── search.html                 (صفحة البحث المتقدم)
│   ├── 404.html                    (صفحة الخطأ)
│   │
│   ├── css/
│   │   ├── style.css               (الأسلوب الرئيسي)
│   │   ├── timeline.css            (نمط الخط الزمني)
│   │   └── responsive.css          (الاستجابة للهواتف)
│   │
│   └── js/
│       ├── app.js                  (التطبيق الرئيسي)
│       ├── data-loader.js          (تحميل البيانات)
│       ├── search.js               (محرك البحث)
│       ├── timeline.js             (خط زمني تفاعلي)
│       └── utils.js                (أدوات عامة)
│
├── 🔧 scripts/                     (نصوص البناء والنشر)
│   ├── build-site.js               (بناء الموقع الثابت)
│   ├── validate-data.js            (فحص صحة البيانات)
│   ├── generate-pdf.js             (توليد ملفات PDF)
│   ├── export-word.js              (توليد ملفات Word)
│   └── deploy.sh                   (نشر للمنتج)
│
├── 📁 exports/                     (الملفات المُصدَّرة)
│   ├── wissa-sobhy-biography.pdf   (السيرة PDF)
│   ├── wissa-sobhy-biography.docx  (السيرة Word)
│   ├── timeline-chart.pdf
│   └── sources-complete.xlsx       (الجدول الشامل)
│
├── 📁 tests/                       (اختبارات تلقائية)
│   ├── unit/
│   ├── integration/
│   └── data/
│
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml              (نشر تلقائي عند كل تحديث)
│   │   ├── validate.yml            (فحص تلقائي)
│   │   └── build.yml               (بناء تلقائي)
│   │
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE/
│
├── 📄 .gitignore                   (ملفات يتجاهلها Git)
├── 📄 .editorconfig                (إعدادات المحرر)
└── 📄 .env.example                 (متغيرات البيئة)
```

---

## شرح كل مجلد

### 📊 `data/` - ملفات البيانات

**الملفات الأساسية:**
- `biography.json` - السيرة الشاملة (الشخص، الميلاد، التعليم، الخدمة)
- `timeline.json` - 43 حدث موثق مع التواريخ والوصف
- `events.json` - 4 أحداث رئيسية مع التفاصيل
- `sources.json` - 15 مصدر موثوق مع درجات الموثوقية

**صيغة البيانات:** JSON (سهل المعالجة البرمجية)

**الاستخدام:**
- تحميل من قبل الموقع التفاعلي
- تصدير إلى PDF/Word
- البحث والفهرسة

---

### 📁 `media/` - الوسائط

**أربعة أنواع:**
1. **photos/** - الصور (JPG, PNG)
   - ترتيب حسب الفترة الزمنية
   - وصف لكل صورة
   - بيانات الأصل

2. **documents/** - الوثائق (PDF, DOC)
   - شهادات
   - رسائل رسمية
   - مقالات صحفية

3. **videos/** - الفيديوهات (MP4, WebM)
   - مقابلات
   - تغطية أحداث
   - شهادات مصورة

4. **audio/** - التسجيلات الصوتية (MP3, WAV)
   - عظات
   - شهادات شفهية

---

### 📖 `content/` - المحتوى النصي

**صيغة Markdown** - سهلة للقراءة والتحرير

**الهيكل:**
- biography/ - السيرة الشاملة مقسمة حسب الفترات
- events/ - كل حدث رئيسي ملف منفصل
- relationships/ - العلاقات المهمة
- analysis/ - تحليل ودراسات

---

### 🌐 `website/` - الموقع التفاعلي

**صفحات رئيسية:**
- `index.html` - الصفحة الرئيسية (الاستقبال)
- `biography.html` - السيرة الكاملة
- `timeline.html` - خط زمني تفاعلي
- `events.html` - الأحداث الرئيسية
- `media.html` - معرض الصور والوسائط
- `sources.html` - قائمة المصادر الموثوقة
- `search.html` - محرك بحث متقدم

**التصميم:**
- CSS Grid و Flexbox
- تصميم مستجيب (Responsive)
- يدعم اللغة العربية (RTL)

---

### 🔧 `scripts/` - نصوص البناء

```bash
npm run build     # بناء الموقع الثابت
npm run validate  # فحص البيانات
npm run pdf       # توليد PDF
npm run word      # توليد Word
npm run deploy    # نشر للإنتاج
```

---

### 📁 `exports/` - الملفات المُصدَّرة

**الملفات المتاحة للتحميل:**
- وثيقة Word منسقة (للطباعة والتعديل)
- ملف PDF عالي الجودة (للقراءة)
- جداول بيانات (للتحليل)

---

### .github/ - إعدادات GitHub

**Workflows:**
- نشر تلقائي عند كل push
- اختبارات تلقائية
- فحص جودة الكود

---

## 🔄 التدفق النموذجي للبيانات

```
1. البيانات الأولية
   ↓
2. ملفات JSON منسقة
   ↓
3. صفحات HTML (من البيانات)
   ↓
4. موقع تفاعلي + PDF + Word
   ↓
5. نشر على GitHub Pages
```

---

## 📝 معايير التسمية

### الملفات
```
[YYYYMMDD]-[description].md
2026-08-28-biography.md
2026-04-08-jubilee-celebration.md
```

### المجلدات
```
lowercase-with-hyphens
/deir-mawas-churches
/2013-sectarian-attacks
```

### الملفات JSON
```
snake_case_lowercase
biography.json
timeline.json
events.json
```

---

## 🔐 أذونات الوصول

```
📄 ملفات عامة        → public (تقراءة)
📷 صور عامة         → public (قراءة)
🔒 معلومات خاصة     → restricted
👨‍👩‍👧‍👦 بيانات عائلية   → family_only
```

---

## 💾 استراتيجية النسخ الاحتياطية

```
1. GitHub (النسخة الرسمية)
2. Backup محلي (بالكمبيوتر)
3. Archive.org (طويل الأجل)
4. Google Drive (بديل الطوارئ)
```

---

## 📊 إحصائيات المشروع

```
✅ السيرة:        100% موثقة
✅ الخط الزمني:  43 حدث موثق
✅ المصادر:      15 مصدر معروف
✅ الوسائط:      قيد الإضافة
✅ الموقع:       99% جاهز
✅ PDF/Word:     80% جاهز
```

---

## 🚀 كيفية البدء

### للقراءة فقط
1. اذهب إلى https://wissa-sobhy-archive.github.io
2. اقرأ السيرة والمعلومات

### للمطورين
```bash
git clone https://github.com/BishoElkomos/wissa-sobhy-archive.git
cd wissa-sobhy-archive
npm install
npm run build
npm start
```

---

**آخر تحديث:** أغسطس 2026
