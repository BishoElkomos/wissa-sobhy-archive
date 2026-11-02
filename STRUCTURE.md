# 📋 بنية المستودع

هذه هي البنية الفعلية الحالية للمستودع (نوفمبر 2026).

```
wissa-sobhy-archive/
│
├── README.md                     تعريف المشروع ونقطة البداية
├── UPDATE-GUIDE.md               دليل التحديث الروتيني والنشر
├── CHANGELOG.md                  سجل التغييرات
├── STRUCTURE.md                  هذا الملف
├── METHODOLOGY.md                منهج التوثيق والترجيح بين المصادر
├── CONTRIBUTE.md                 كيفية المساهمة
├── LICENSE                       الترخيص
├── package.json                  أوامر البناء والتحقق (npm scripts)
├── vercel.json                   إعداد بناء الموقع على Vercel
├── .gitignore                    ملفات لا تُرفع (dist/ و node_modules/ و .vercel/)
│
├── data/                         كل المحتوى القابل للتحديث (JSON)
│   ├── biography.json            السيرة الكاملة
│   ├── timeline.json             الخط الزمني
│   ├── events.json               الأحداث الرئيسية
│   ├── sources.json              المصادر الموثقة
│   ├── source-registry.json      سجل المصادر والأخبار الموحد
│   ├── photo-registry.json       سجل الصور
│   ├── media-registry.json       سجل الوسائط
│   ├── evidence-matrix.json      مصفوفة ربط الادعاءات بمصادرها
│   ├── archive-methodology.json  قواعد التوثيق المعتمدة
│   └── … ملفات إضافات وتصحيحات مرحلية بأسماء تاريخية
│
├── website/                      صفحات الموقع
│   ├── *.html                    الصفحات العربية (الرئيسية، السيرة، الشخصيات، المصادر…)
│   ├── en/*.html                 النسخ الإنجليزية
│   ├── css/                      ملفات التنسيق (archive-premium.css طبقة التصميم الموحدة)
│   ├── js/                       سكربتات العرض
│   ├── photos/                   صور الأرشيف العائلي المنشورة
│   ├── robots.txt
│   └── sitemap.xml
│
├── content/                      محتوى نصي تفصيلي (Markdown)
├── docs/                         وثائق مساندة (فهرس الوسائط)
├── scripts/                      سكربتات البناء والتحقق
│   ├── build-site.js             يبني نسخة النشر في dist/
│   ├── validate-data.js          فحص صحة البيانات
│   └── validate-archive-integrity.js  بوابة سلامة الأرشيف
│
└── .github/workflows/deploy.yml  فحوص تلقائية عند كل رفع إلى main
```

ملاحظات:
- مجلد `dist/` (ناتج البناء) و`node_modules/` لا يُرفعان إلى المستودع؛ يُبنى `dist/` تلقائيًا عند النشر.
- كل تعديل محتوى يبدأ من `data/` أو `website/` ثم `npm run build` — التفاصيل في UPDATE-GUIDE.md.
