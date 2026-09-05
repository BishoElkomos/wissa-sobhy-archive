# Project Handoff — أرشيف القمص ويصا صبحي تادرس

> هذا الملف هو نقطة الاستئناف الرسمية عند فتح محادثة جديدة. لا يُفترض أن تكون المحادثة السابقة هي مصدر الحقيقة؛ المستودع وسجل Git هما المرجع التنفيذي.

## 1. هوية المشروع
- المستودع: `BishoElkomos/wissa-sobhy-archive`
- الفرع الأساسي: `main`
- الغرض: أرشيف تاريخي رقمي طويل الأمد لسيرة وخدمة القمص ويصا صبحي تادرس، مع توثيق المصادر والصور والوسائط والسياق الكنسي.
- اللغة الأساسية: العربية RTL، مع نسخة إنجليزية موازية.
- فلسفة المشروع: أرشيف تاريخي موثق، وليس مدونة أو لوحة تحكم أو نسخة من ويكيبيديا.

## 2. قاعدة الحقيقة التنفيذية
لا تُعتبر أي مهمة مكتملة إلا إذا كان لها أثر فعلي في GitHub، ولا يُقال إن نسخة الإنتاج محدثة إلا بعد التحقق من deployment/live output. لا تُرفع أي معلومة من قرينة إلى حقيقة موثقة لمجرد تطابق اسم أو وجود رابط.

## 3. البنية الحالية
- `website/wissa.html`: الصفحة الموحدة للقمص ويصا: السيرة + الخط الزمني + الأحداث.
- `website/agabius.html`: ملف الأنبا أغابيوس.
- `website/boktor.html`: ملف الأنبا بقطر.
- `website/diocese.html`: تاريخ إيبارشية ديرمواس ودلجا.
- `website/sources-media.html`: مركز المصادر والأخبار والوسائط.
- `website/search.html`: البحث.
- الصفحات القديمة biography/timeline/events/media/sources محفوظة كمسارات توافقية/redirects.
- `evidence.html` متقاعد من الواجهة العامة ولا ينبغي إعادته إلى التنقل العام دون قرار صريح.

## 4. الحقائق الحساسة التي لا يجوز تغيير صياغتها بلا دليل أقوى
- الصفة الحالية: `كاهن كنيسة السيدة العذراء بديرمواس`.
- الصفة السابقة: `وكيل إيبارشية ديرمواس ودلجا من 1991 حتى 2025`.
- لا يوصف بأنه وكيل حاليًا.
- سنة 1988 مرتبطة بالانتقال/الخدمة مع الأنبا أغابيوس، ولا تُستخدم وحدها لإثبات بدء الوكالة.
- السيامة الكهنوتية: 11 فبراير 1991.
- بداية الخدمة الكهنوتية: مارس 1991 وفق السجل الحالي.
- القمصية: 22 يونيو 1997، مع بقاء الحاجة إلى وثيقة أولية إذا أردنا رفع مستوى الإثبات.
- العلاقة بالأنبا أغابيوس محفوظة كعلاقة تاريخية ممتدة 1988–2025، مع ضرورة ربط كل دور محدد بمصدره.

## 5. منهج الإثبات
ترتيب الأولوية: مصدر كنسي رسمي أولي ← وثيقة أصلية مؤرخة ← صحافة موثوقة ذات إحالة محددة ← مرجع متخصص ← أرشيف عائلي/داخلي ← مصدر ويب ثانوي ← نتيجة بحث/منشور اجتماعي.

الحالات المستخدمة: `primary_source`, `cross_supported`, `secondary_published`, `source_recorded`, `indexed_not_fully_retrieved`, `needs_verification`, `metadata_only`, `link_only`.

المواد العائلية والصور/الروابط التي لم تُفحص مباشرة تحفظ كمواد أرشيفية أو قرائن ولا تُستخدم لإثبات محتوى غير معاين.

## 6. حالة المصادر الحالية
- `data/source-registry.json`: السجل الأساسي.
- `data/source-additions-2026-09.json`: سجل إضافات 2026؛ آخر نسخة موثقة 1.4، وتشمل أربعة روابط Facebook قدمها صاحب الأرشيف.
- `data/source-corrections-2026-09.json`: تصحيحات/تقوية لبعض سجلات المصادر.
- `data/evidence-matrix.json`: خريطة الادعاء ← المصدر، داخلية وغير معروضة كصفحة تدقيق عامة.
- `data/archive-methodology.json`: المنهج الدائم.
- `data/biography-source-corrections-2026-09.json`: تصحيحات صريحة للسيرة قبل إخراج dist.
- `data/media-registry.json`: 9 مواد صوتية/مرئية مسجلة، بعضها `metadata_only` أو `link_only` ويحتاج فحصًا فعليًا.
- `data/photo-registry.json`: 13 صورة Cloudinary مسجلة، وحالتها الحالية `supplied_pending_visual_review` ما لم تُراجع منفردة.

## 7. آخر دليل Facebook تمت معاينته
السجل `facebook-wissa-appearance-19xfy` مرتبط بالرابط `https://www.facebook.com/share/p/19XfyZERyP/`.
- تاريخ المنشور الظاهر: 10 يوليو 2025.
- الصفحة الظاهرة: «مطرانية ديرمواس ودلجا للأقباط الأرثوذكس».
- نص المنشور الظاهر: تهنئة للمقدم/ مصطفى عثمان، مأمور مركز شرطة ديرمواس، بمناسبة سيامة وتجليس الأنبا بقطر أسقفًا على إيبارشية ديرمواس ودلجا.
- لقطة الشاشة المقدمة للأرشيف تُظهر القمص ويصا ضمن الصورة الجماعية.
- لا تُستخدم اللقطة وحدها لإثبات هوية بقية الأشخاص أو أدوارهم.
- السجل محدث بالفعل إلى version 1.4 في commit `abe141d8a8a35744869b649f3142434ed6f0f6b4`.

## 8. آخر حالة Git/CI المعروفة
آخر commit على `main` عند إعداد هذا الملف: `abe141d8a8a35744869b649f3142434ed6f0f6b4` — `docs: verify Facebook appearance evidence from supplied screenshot`.
آخر GitHub Actions run لهذا commit: run `33884100819` / run number `196`، وحالته `completed / success` بتاريخ 4 سبتمبر 2026.
Workflow: `.github/workflows/deploy.yml`، ويقوم بالتحقق ثم build ثم PDF (مع continue-on-error) ثم نشر GitHub Pages.

## 9. النشر
- Vercel canonical project: `wissa-sobhy-tadros-archive`.
- canonical production domain: `https://wissa-sobhy-tadros-archive.vercel.app/`.
- آخر deployment production موثوق سابقًا: `dpl_H4U5ybHHrRiqdPiT6GD3CDspVc1W` على commit `e3e137025ba8bccb2a7b24152cad84fd6fd9df25`.
- توجد deployments لاحقة معروفة، لكن لا يجوز اعتبار commit معين live على Vercel دون إعادة التحقق.
- GitHub Pages يستخدم CNAME `wissa-sobhy-archive.com`، لكنه ليس المرجع القانوني/الكانوني للموقع؛ Vercel هو canonical production في هذا المشروع.

## 10. نظام البناء
`package.json` يبني عبر:
`node scripts/build-site.js && node scripts/apply-biography-corrections.js && node scripts/apply-timeline-corrections.js && node scripts/merge-biography-research-dist.js && node scripts/merge-source-registry-dist.js`

`merge-source-registry-dist.js` يدمج سجلات الإضافات ويطبق سجلات التصحيح بعد ذلك. `merge-biography-research-dist.js` يضع البحث الإضافي في `research_enrichment` دون الكتابة الصامتة فوق البيانات الأساسية.

## 11. أهم الملفات التي يجب فحصها قبل أي تطوير جديد
1. `PROJECT-HANDOFF.md`
2. `data/evidence-matrix.json`
3. `data/archive-methodology.json`
4. `data/biography.json`
5. `data/timeline.json`
6. `data/events.json`
7. `data/source-registry.json`
8. `data/source-additions-2026-09.json`
9. `data/source-corrections-2026-09.json`
10. `package.json` و`.github/workflows/deploy.yml`

## 12. العمل المفتوح — بالترتيب المقترح
### A. سلامة الأرشيف
- مراجعة README لأنه يحتوي بعض أوصافًا قديمة، منها الإشارة إلى سجل الأدلة العام.
- مراجعة كل source IDs القديمة مثل `wikipedia`, `family_archive`, والسجلات العامة غير المحددة، واستبدالها أو ربطها بمصادر محددة حيث أمكن.
- إضافة سجل حفظ للمصادر المهمة: access date، نوع النسخة المحفوظة، hash إن توفرت نسخة قانونية/تقنية محفوظة.

### B. السيرة والخط الزمني
- تحويل أكبر قدر ممكن من claims إلى claim-level provenance.
- مراجعة أي صياغة أقوى من المصدر، خصوصًا أفعال «أسس/أنشأ/أشرف/قاد».
- عدم تحويل تفاصيل البحث الإضافي إلى حقائق أساسية إلا بعد دعمها.

### C. الوسائط والصور
- فحص المواد `metadata_only` و`link_only` فعليًا عندما تتوفر الملفات.
- عدم نسبة فيديو/تسجيل إلى القمص ويصا من الاسم فقط.
- إنشاء سجل مستقل للصور القادمة من منشورات اجتماعية: رابط المنشور + تاريخ الظاهر + screenshot provenance + وصف بصري + حالة حقوق الاستخدام.
- عدم تعديل ملامح الوجه بالذكاء الاصطناعي في الصور الأرشيفية.

### D. البحث الخارجي
Issue #4: `Research: recover 2007–2015 primary and international sources`.
المطلوب: 2007 النزاع العقاري، 2010 كاميليا، 2013 هجمات ديرمواس ودلجا، 2014 إعادة الإعمار/الأمن، 2015 التغطية، المصادر الدولية واللغات الأجنبية، صور تاريخية، مع الفصل بين تاريخ الحدث وتاريخ النشر، وعدم احتساب النسخ المنقولة كمصادر مستقلة.

### E. النشر
- بعد أي تغيير جوهري: validate → build → CI → التحقق من deployment → فحص live canonical URLs.
- لا تقل «تم النشر» بناءً على نجاح GitHub Actions فقط.

## 13. أسلوب العمل المطلوب
اعمل كمراجع أرشيفي + مهندس جودة + مدير تقني:
1. افحص الحالة الحالية أولًا.
2. حدد المخاطر والتعارضات.
3. نفذ التعديل الفعلي عندما يكون آمنًا.
4. تحقق من النتيجة.
5. سجل commit واضحًا.
6. لا تدّعِ نجاحًا لم يتم التحقق منه.
7. لا تطلب من المستخدم إعادة شرح ما هو موجود في هذا الملف.

## 14. نقطة الاستئناف الافتراضية
إذا لم يعط المستخدم مهمة محددة، ابدأ بـ **Archive Integrity Phase**: إصلاح README، ثم claim-level provenance، ثم media/photo provenance، ثم مراجعة Issue #4، ثم live verification والنشر.

**آخر تحديث لهذا الملف:** 2026-09-05.
