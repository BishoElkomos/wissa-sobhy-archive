# 🚀 تعليمات رفع المشروع على GitHub

**الهدف:** نقل المشروع الكامل من مجلد العمل المحلي إلى مستودع GitHub الموجود

---

## 📋 المتطلبات الأساسية

```
✅ حساب GitHub مفعّل
✅ Git مثبت على الكمبيوتر
✅ الوصول لمستودع: https://github.com/BishoElkomos/wissa-sobhy-archive
✅ صلاحيات الكتابة على المستودع
```

---

## ⚙️ خطوات الإعداد الأول (مرة واحدة فقط)

### 1. تثبيت Git
```bash
# على Windows:
# حمّل من: https://git-scm.com/download/win

# على Mac:
brew install git

# على Linux:
sudo apt-get install git
```

### 2. إعداد معلومات Git الشخصية
```bash
git config --global user.name "Bishoy Elkomos"
git config --global user.email "your-email@example.com"
```

### 3. توليد مفتاح SSH (اختياري لكن موصى به)
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
# ثم أضف المفتاح في إعدادات GitHub
```

---

## 📤 خطوات الرفع على GitHub

### الطريقة الأولى: الرفع الكامل (للمرة الأولى)

```bash
# 1. قف في مجلد المشروع
cd /home/claude/wissa-archive-rebuild

# 2. هيّئ مستودع Git محلي
git init

# 3. أضف جميع الملفات
git add .

# 4. اعمل أول Commit
git commit -m "Initial commit: Complete project structure v2.0.0

- Added complete data structure (biography, timeline, events, sources)
- Built interactive website (HTML, CSS, JavaScript)
- Created comprehensive documentation
- Set up build scripts and deployment configuration
- Implemented responsive design for mobile and desktop
- Prepared PDF and Word export functionality
- Added Wikipedia integration guide
- Ready for first release

Project status: 85% complete, ready for publication"

# 5. أضف المستودع البعيد (Remote)
git remote add origin https://github.com/BishoElkomos/wissa-sobhy-archive.git

# 6. أعد تسمية الفرع الرئيسي
git branch -M main

# 7. ادفع (Push) إلى GitHub
git push -u origin main
```

### الطريقة الثانية: الرفع المتدرج (إذا كان لديك ملفات موجودة)

```bash
# 1. استنساخ المستودع الموجود أولاً
git clone https://github.com/BishoElkomos/wissa-sobhy-archive.git

# 2. انسخ الملفات الجديدة إلى المستودع
cp -r /home/claude/wissa-archive-rebuild/* ./wissa-sobhy-archive/

# 3. ادخل المجلد
cd wissa-sobhy-archive

# 4. أضف الملفات الجديدة
git add .

# 5. اعمل Commit
git commit -m "Update: Add complete project structure v2.0.0"

# 6. ادفع التغييرات
git push origin main
```

---

## 🔄 الرفع المستقبلي (التحديثات)

بعد الرفع الأول، عندما تريد تحديث المشروع:

```bash
# 1. تأكد من أن التغييرات محفوظة
git status

# 2. أضف التغييرات
git add .

# 3. اعمل Commit مع رسالة واضحة
git commit -m "Update: Add new photos and fix timeline

- Added 15 new photos from 2013 events
- Fixed dates in timeline.json
- Updated sources documentation"

# 4. ادفع إلى GitHub
git push origin main
```

---

## 📊 رسائل Commit الموصى بها

### للإضافات الجديدة:
```
Add: [وصف الإضافة]
- النقطة 1
- النقطة 2
```

### للتحديثات:
```
Update: [وصف التحديث]
- التحديث 1
- التحديث 2
```

### لإصلاح الأخطاء:
```
Fix: [وصف المشكلة المحلولة]
- الحل 1
- الحل 2
```

### للتحسينات:
```
Improve: [وصف التحسين]
- التحسين 1
- التحسين 2
```

---

## 🌐 نشر على GitHub Pages

### الخطوة الأولى: تفعيل GitHub Pages

```
1. اذهب إلى: https://github.com/BishoElkomos/wissa-sobhy-archive/settings
2. اختر "Pages" من الجانب الأيسر
3. اختر الفرع "main" والمجلد "/root" أو "/website"
4. احفظ
```

### الخطوة الثانية: الانتظار للنشر

```
- عادة ما ينشر GitHub Pages في 1-5 دقائق
- سيكون الموقع متاحاً على: https://bishoelkomos.github.io/wissa-sobhy-archive
```

### التحقق من النشر:
```bash
# تحقق من حالة النشر في:
https://github.com/BishoElkomos/wissa-sobhy-archive/actions

# أو افتح الموقع مباشرة:
https://bishoelkomos.github.io/wissa-sobhy-archive
```

---

## 🔐 الأمان والخصوصية

### ملفات لا يجب رفعها:

```bash
# أنشئ .gitignore إذا لم يكن موجوداً
echo ".env
node_modules/
media/photos/*.jpg
media/photos/*.png
media/private/
config.local.js" > .gitignore

git add .gitignore
git commit -m "Add: .gitignore for sensitive files"
git push
```

### حماية المستودع:

```
1. اذهب إلى Settings → Security → Branch protection rules
2. اختر الفرع "main"
3. اختر:
   ✅ Require a pull request before merging
   ✅ Require status checks to pass
   ✅ Dismiss stale pull request approvals
4. احفظ
```

---

## 📈 المراقبة والصيانة

### مراقبة الأخطاء:
```bash
# تحقق من أحدث Commits:
git log --oneline -10

# انظر إلى الفروع:
git branch -a

# تحقق من الحالة:
git status
```

### إذا حدث خطأ:
```bash
# استرجع آخر Commit:
git reset --hard HEAD~1

# أو استرجع ملف معين:
git checkout -- <filename>

# ثم ادفع التحديث:
git push origin main
```

---

## 🚨 استكشاف الأخطاء الشائعة

### المشكلة 1: "Permission denied"
```bash
# الحل: استخدم SSH بدلاً من HTTPS
git remote set-url origin git@github.com:BishoElkomos/wissa-sobhy-archive.git
```

### المشكلة 2: "fatal: refusing to merge unrelated histories"
```bash
# الحل:
git pull origin main --allow-unrelated-histories
git push origin main
```

### المشكلة 3: ملفات كبيرة جداً (> 100MB)
```bash
# يجب استخدام Git LFS:
git lfs install
git lfs track "*.jpg"
git lfs track "*.png"
git add .gitattributes
git push
```

---

## ✅ قائمة التحقق قبل الرفع

```
الملفات والمجلدات:
- [ ] جميع الملفات موجودة
- [ ] لا توجد ملفات غير مرغوبة
- [ ] المجلدات منظمة بشكل صحيح
- [ ] .gitignore يعمل بشكل صحيح

البيانات:
- [ ] لا توجد معلومات حساسة
- [ ] جميع المصادر موثقة
- [ ] البيانات JSON صحيحة
- [ ] لا توجد أرقام أو كلمات مرور

الكود:
- [ ] لا توجد أخطاء في HTML/CSS/JS
- [ ] الروابط تعمل بشكل صحيح
- [ ] الموقع يحمل بسرعة معقولة
- [ ] التصميم يعمل على الهاتف

التوثيق:
- [ ] README محدث ودقيق
- [ ] جميع الملفات الأخرى موجودة
- [ ] الروابط في الوثائق صحيحة
- [ ] لا توجد أخطاء إملائية
```

---

## 📞 الدعم والمساعدة

### إذا واجهت مشكلة:

```
1. اقرأ رسالة الخطأ بعناية
2. ابحث عن الحل في: https://stackoverflow.com
3. تواصل مع فريق GitHub: https://support.github.com
4. ابحث في توثيق Git: https://git-scm.com/doc
```

### للمشاكل المرتبطة بالمشروع:

```
البريد: bishoy@elkomos.dev
GitHub Issues: https://github.com/BishoElkomos/wissa-sobhy-archive/issues
```

---

## 🎉 بعد النشر الناجح

```
✅ تم الرفع على GitHub
✅ الموقع التفاعلي يعمل
✅ ملفات PDF و Word متاحة
✅ التوثيق كامل
⏳ التالي: تحديث ويكيبيديا
⏳ التالي: الترويج والإعلان
```

---

## 📝 ملاحظات نهائية

### نصائح مهمة:
- **اكتب رسائل Commit واضحة** - ستساعد المستقبل على فهم التغييرات
- **ارفع التغييرات بانتظام** - لا تنتظر حتى تراكم الكثير من التغييرات
- **راجع قبل الرفع** - استخدم `git diff` و `git status`
- **اتعاون مع الآخرين** - استخدم Pull Requests للمساهمات

### الخطوات القادمة:
1. ✅ الرفع على GitHub
2. ⏳ تفعيل GitHub Pages
3. ⏳ تحديث ويكيبيديا
4. ⏳ الترويج على وسائل التواصل

---

**آخر تحديث:** 28 أغسطس 2026  
**الإصدار:** 2.0.0  
**الحالة:** جاهز للرفع
