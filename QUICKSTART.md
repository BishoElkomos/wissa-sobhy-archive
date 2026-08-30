# 🚀 دليل البدء السريع

**الوقت المتوقع:** 5 دقائق  
**المستوى:** مبتدئ إلى متقدم

---

## ✅ ما لديك الآن

✅ **مشروع متكامل** جاهز للنشر  
✅ **بيانات موثقة** بـ 43 حدث  
✅ **موقع تفاعلي** قيد الاستخدام  
✅ **توثيق شامل** للمشروع  
✅ **معايير عالية** للجودة  

---

## 📋 الخطوات الفورية (هذا الأسبوع)

### 1️⃣ رفع على GitHub ⚠️ **أولوية قصوى**

```bash
# انسخ المشروع
cd /home/claude/wissa-archive-rebuild

# هيّئ Git
git init
git add .
git commit -m "Initial: Project v2.0.0 - Complete rebuild"

# ارفع على المستودع الموجود
git remote add origin https://github.com/BishoElkomos/wissa-sobhy-archive.git
git branch -M main
git push -u origin main --force
```

### 2️⃣ اجمع الصور والوثائق

```
أرسل إلى: contribute@wissa-archive.com

الموضوع: صور - للأرشيف
المرفقات:
  ✅ صور السيامة 1991
  ✅ صور الخدمة
  ✅ وثائق رسمية
  ✅ صور الأحداث
```

### 3️⃣ اختبر الموقع محلياً

```bash
npm install
npm start

# ثم اذهب إلى http://localhost:8080
```

---

## 🔄 الخطوات التالية (الأسابيع 2-4)

### 1. أضف الصفحات الإضافية
- [ ] biography.html - يحتوي على السيرة الكاملة
- [ ] timeline.html - خط زمني تفاعلي
- [ ] events.html - الأحداث الرئيسية
- [ ] media.html - معرض الوسائط
- [ ] sources.html - المصادر الموثقة
- [ ] search.html - محرك بحث

### 2. ربط البيانات JSON
```javascript
// في كل صفحة
const data = await fetch('../data/timeline.json');
const timeline = await data.json();
// ثم استخدمها في الصفحة
```

### 3. بناء الملفات المصدرة
```bash
npm run pdf     # توليد PDF
npm run word    # توليد Word
npm run xlsx    # توليد جداول البيانات
```

### 4. نشر على GitHub Pages
```bash
npm run deploy
# الموقع سيظهر على: https://bishoelkomos.github.io/wissa-sobhy-archive
```

---

## 📚 البنية المهمة

```
├── data/                    📊 البيانات (JSON)
│   ├── biography.json
│   ├── timeline.json
│   ├── events.json
│   └── sources.json
│
├── website/                 🌐 الموقع
│   ├── index.html          (جاهز)
│   ├── biography.html       (قيد الإنشاء)
│   ├── css/style.css        (جاهز)
│   └── js/app.js            (جاهز)
│
├── content/                 📖 المحتوى النصي
│   ├── biography/
│   └── events/
│
└── exports/                 📄 الملفات المصدرة
    ├── *.pdf
    ├── *.docx
    └── *.xlsx
```

---

## 🔧 الأوامر الأساسية

```bash
# التثبيت الأول
npm install

# التطوير المحلي
npm start          # تشغيل خادم محلي
npm run build      # بناء الموقع
npm run validate   # فحص البيانات

# التصدير
npm run pdf        # توليد PDF
npm run word       # توليد Word
npm run xlsx       # توليد جداول البيانات

# النشر
npm run deploy     # نشر على GitHub Pages
```

---

## 🎯 أهم الملفات

| الملف | الاستخدام | الأولوية |
|------|-----------|--------|
| README.md | وصف المشروع | ⭐⭐⭐ |
| biography.json | السيرة الرئيسية | ⭐⭐⭐ |
| timeline.json | 43 حدث موثق | ⭐⭐⭐ |
| index.html | الصفحة الرئيسية | ⭐⭐⭐ |
| style.css | التصميم | ⭐⭐ |
| CONTRIBUTE.md | المساهمة | ⭐⭐ |
| METHODOLOGY.md | المنهج | ⭐ |

---

## 📱 اختبار الموبايل

```bash
npm start

# ثم اذهب إلى http://localhost:8080
# اختبر على الهاتف من خلال عنوان IP
```

---

## 🐛 استكشاف الأخطاء

### المشكلة: npm install فشل
```bash
# حل:
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### المشكلة: الصفحة لا تحمل البيانات
```bash
# تأكد من وجود الملفات:
ls data/
ls -la website/js/data-loader.js
```

### المشكلة: الموقع بطيء جداً
```bash
npm run build  # بناء مرة أخرى
```

---

## 🎓 موارد إضافية

- 📚 [README.md](README.md) - شامل
- 📋 [STRUCTURE.md](STRUCTURE.md) - البنية
- 🔍 [METHODOLOGY.md](METHODOLOGY.md) - المنهج
- 🤝 [CONTRIBUTE.md](CONTRIBUTE.md) - المساهمة
- 📊 [STATUS.md](STATUS.md) - حالة المشروع

---

## 📞 احتاج مساعدة؟

### البريد الإلكتروني
📧 `contribute@wissa-archive.com`

### GitHub Issues
🐙 [أنشئ issue جديد](https://github.com/BishoElkomos/wissa-sobhy-archive/issues)

### الأسئلة الشائعة
```
س: كيف أضيف صوراً؟
ج: أرسلها بالبريد إلى contribute@wissa-archive.com

س: كيف أصحح معلومة خاطئة؟
ج: افتح Issue على GitHub أو أرسل بريداً

س: كيف أترجم المحتوى؟
ج: اتصل بنا عبر البريد أو GitHub
```

---

## ✨ ما هو الشيء التالي؟

1. **هذا الأسبوع:** رفع على GitHub
2. **الأسبوع التالي:** جمع الوسائط
3. **الأسبوع الثالث:** إكمال الصفحات
4. **الأسبوع الرابع:** النشر الأول

---

## 🎉 تم!

أنت الآن جاهز لبدء المرحلة التالية.

**الخطوة التالية:**
```bash
cd /home/claude/wissa-archive-rebuild
git push
```

**المتوقع:** موقع حي في غضون أسبوع! 🚀

---

**آخر تحديث:** 28 أغسطس 2026
