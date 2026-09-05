# Project Handoff — أرشيف القمص ويصا صبحي تادرس

> نقطة الاستئناف الرسمية عند فتح محادثة جديدة. المستودع وسجل Git هما مصدر الحقيقة التنفيذي، وليس نص المحادثة السابقة.

## الحالة عند آخر تحديث
- التاريخ: 2026-09-05
- الفرع: `main`
- آخر commit بعد تحديث هذا الملف سيحمل هذا السجل؛ يجب إعادة فحص HEAD وCI عند الاستئناف.
- آخر commit معروف قبل هذا التحديث: `946b92586172c50231ce737f6b132e9f44872eb7`.
- آخر GitHub Actions ناجح موثق: run `33884100819` / #196 على commit `abe141d8a8a35744869b649f3142434ed6f0f6b4`.

## المشروع
أرشيف تاريخي رقمي طويل الأمد لسيرة وخدمة القمص ويصا صبحي تادرس، مع المصادر والأخبار والصور والوسائط والسياق الكنسي. المشروع ليس مدونة أو Dashboard أو نسخة من ويكيبيديا.

## البنية العامة
- `website/wissa.html`: السيرة + الخط الزمني + الأحداث.
- `website/agabius.html`: الأنبا أغابيوس.
- `website/boktor.html`: الأنبا بقطر.
- `website/diocese.html`: تاريخ إيبارشية ديرمواس ودلجا.
- `website/sources-media.html`: المصادر والأخبار والوسائط.
- `website/search.html`: البحث.
- الصفحات القديمة biography/timeline/events/media/sources محفوظة كـ redirects توافقية.
- `evidence.html` متقاعد من الواجهة العامة؛ خريطة الأدلة موجودة داخليًا.

## حقائق لا تغيّر صياغتها بلا دليل أقوى
- الصفة الحالية: **كاهن كنيسة السيدة العذراء بديرمواس**.
- الصفة السابقة: **وكيل إيبارشية ديرمواس ودلجا من 1991 حتى 2025**.
- لا يوصف بأنه وكيل حاليًا.
- 1988 سنة ارتباط/انتقال وخدمة مع الأنبا أغابيوس، وليست دليلًا وحدها على بداية الوكالة.
- السيامة الكهنوتية: 11 فبراير 1991.
- بداية الخدمة الكهنوتية: مارس 1991 وفق السجل الحالي.
- القمصية: 22 يونيو 1997؛ يظل رفعها إلى primary_source بحاجة إلى وثيقة أولية.
- العلاقة بالأنبا أغابيوس: علاقة تاريخية محفوظة للفترة 1988–2025، مع ربط كل دور محدد بمصدره.

## منهج الإثبات
الأولوية: مصدر رسمي أولي ← وثيقة أصلية مؤرخة ← صحافة موثوقة ذات إحالة محددة ← مرجع متخصص ← أرشيف عائلي/داخلي ← مصدر ويب ثانوي ← نتيجة بحث/منشور اجتماعي.

الحالات: `primary_source`, `cross_supported`, `secondary_published`, `source_recorded`, `indexed_not_fully_retrieved`, `needs_verification`, `metadata_only`, `link_only`.

لا يثبت الرابط وحده الادعاء. ولا تُستخدم مادة metadata_only أو link_only لإثبات محتوى لم تتم معاينته.

## الملفات المركزية
- `data/source-registry.json`
- `data/source-additions-2026-09.json`
- `data/source-corrections-2026-09.json`
- `data/evidence-matrix.json`
- `data/archive-methodology.json`
- `data/biography.json`
- `data/timeline.json`
- `data/events.json`
- `data/media-registry.json`
- `data/photo-registry.json`
- `data/biography-source-corrections-2026-09.json`
- `package.json`
- `.github/workflows/deploy.yml`
- `PROJECT-HANDOFF.md`
- `ARCHIVE-DECISIONS.md`

## Facebook evidence — 10 يوليو 2025
السجل `facebook-wissa-appearance-19xfy` للرابط `https://www.facebook.com/share/p/19XfyZERyP/` تم تقويته بعد تقديم لقطة شاشة أصلية.
- التاريخ الظاهر: 10 يوليو 2025.
- الصفحة الظاهرة: «مطرانية ديرمواس ودلجا للأقباط الأرثوذكس».
- النص الظاهر يهنئ الأنبا بقطر بمناسبة سيامته وتجليسه أسقفًا على الإيبارشية.
- اللقطة تُظهر القمص ويصا ضمن الصورة الجماعية بحسب تعريف صاحب الأرشيف.
- لا تُستخدم اللقطة وحدها لإثبات هوية أو أدوار بقية الأشخاص.
- السجل المصدر أصبح version 1.4 في commit `abe141d8a8a35744869b649f3142434ed6f0f6b4`.

## النشر
- Vercel canonical project: `wissa-sobhy-tadros-archive`.
- canonical domain: `https://wissa-sobhy-tadros-archive.vercel.app/`.
- آخر deployment production موثوق سابقًا: `dpl_H4U5ybHHrRiqdPiT6GD3CDspVc1W` على commit `e3e137025ba8bccb2a7b24152cad84fd6fd9df25`.
- لا تعتبر أي deployment أحدث live دون تحقق فعلي.
- GitHub Pages يستخدم `wissa-sobhy-archive.com` لكنه ليس canonical production.

## البناء والتحقق
`npm run validate` يتحقق من JSON وسلامة روابط الأدلة، و`npm run build` ينفذ البناء والتصحيحات ودمج البحث الإضافي وسجل المصادر.

بعد كل تغيير جوهري: **validate → build → CI → تحقق deployment → فحص live canonical URLs**.

## العمل المفتوح
### 1) Archive Integrity Phase
- claim-level provenance.
- مراجعة source IDs القديمة مثل `wikipedia` و`family_archive` والسجلات العامة غير المحددة.
- عدم المبالغة في أفعال مثل «أسس/أنشأ/أشرف/قاد» ما لم يثبتها المصدر.
- بناء source preservation records مع access date ونسخة محفوظة/hash عندما يكون ذلك متاحًا ومشروعًا.

### 2) الصور والوسائط
- فحص المواد `metadata_only` و`link_only` عند توفر الملفات.
- عدم نسبة فيديو/تسجيل من اسم الملف وحده.
- إنشاء provenance مستقل للصور القادمة من منشورات اجتماعية: الرابط + التاريخ الظاهر + screenshot + الوصف البصري + حالة الحقوق.
- عدم تعديل ملامح الوجه بالذكاء الاصطناعي.

### 3) البحث التاريخي
Issue #4: `Research: recover 2007–2015 primary and international sources`.
يشمل 2007، كاميليا 2010، هجمات 2013، الأمن/إعادة الإعمار 2014، تغطية 2015، المصادر الدولية واللغات الأجنبية، الصور التاريخية، مع الفصل بين تاريخ الحدث وتاريخ النشر وعدم عد النسخ المنقولة كمصادر مستقلة.

## أسلوب التنفيذ
اعمل كمراجع أرشيفي + مهندس جودة + مدير تقني: افحص الحالة أولًا، نفّذ ما يمكن بأمان، تحقق من النتيجة، سجل commit واضحًا، ولا تدّعِ نجاحًا لم يتم التحقق منه.

## عند فتح محادثة جديدة
ابدأ بهذه الرسالة:

> استكمل مشروع أرشيف القمص ويصا صبحي تادرس من `PROJECT-HANDOFF.md`. اقرأ الملف أولًا، ثم افحص `main` وGitHub Actions وVercel/deployment قبل أي تعديل. لا تعيد بناء المشروع من الصفر، ولا تطلب مني إعادة شرح ما هو موثق في المستودع. ابدأ من **Next Action / Archive Integrity Phase**.
