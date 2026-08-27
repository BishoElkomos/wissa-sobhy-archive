# Canonical Data Model — Wissa Sobhy Archive

## الهدف
هذا هو النموذج المرجعي قبل بناء جداول قاعدة البيانات. الأرشيف يبدأ من **القمص ويصا صبحي تادرس** ويظل هو الكيان المحوري، مع قابلية التوسع إلى تاريخ ديرمواس والإيبارشية والأنبا أغابيوس والأنبا بقطر والكنائس والأشخاص والأحداث.

## مبادئ أساسية
- لكل كيان تاريخي معرّف ثابت لا يُعاد استخدامه.
- العربية والإنجليزية تمثلان الكيان نفسه، وليستا سجلين منفصلين.
- لا نملأ حقلًا بمعلومة غير موثقة لمجرد استكمال الشكل.
- الادعاء التاريخي منفصل عن المصدر الذي أورده.
- الميديا كيان أرشيفي له provenance وحقوق مستقلة.
- العلاقات بين الأشخاص والأحداث والأماكن والمؤسسات قابلة للبحث والتصفح.

## Entity IDs
استخدم بادئات ثابتة:
- `person-...`
- `event-...`
- `place-...`
- `org-...`
- `source-...`
- `media-...`
- `article-...`
- `document-...`
- `claim-...`

لا يُعاد استخدام أي ID لكيان مختلف.

## Person
- `id`
- `nameAr`
- `nameEn`
- `titles`
- `aliases`
- `transliterations`
- `birthDate` / `deathDate` عند التحقق
- `bioAr` / `bioEn`
- `roles`
- `places`
- `organizations`
- `events`
- `relationships`
- `sources`
- `media`
- `confidence`
- `notes`

## Event
- `id`
- `titleAr`
- `titleEn`
- `dateStart`
- `dateEnd`
- `datePrecision` (exact / month / year / approximate / disputed)
- `summaryAr` / `summaryEn`
- `descriptionAr` / `descriptionEn`
- `people`
- `places`
- `organizations`
- `claims`
- `sources`
- `media`
- `relatedEvents`
- `confidence`
- `notes`

## Place
- `id`
- `nameAr`
- `nameEn`
- `aliases`
- `placeType`
- `governorate`
- `markaz`
- `country`
- `coordinates` when appropriate
- `descriptionAr` / `descriptionEn`
- `events`
- `people`
- `organizations`
- `sources`

## Organization
يمثل كنيسة أو إيبارشية أو مؤسسة صحفية أو جهة رسمية أو أمنية أو غيرها.

- `id`
- `nameAr`
- `nameEn`
- `historicalNames`
- `type`
- `places`
- `people`
- `events`
- `sources`
- `notes`

## Source
المصدر هو أساس قابلية التدقيق.

- `id`
- `title`
- `publisher`
- `author`
- `publicationDate`
- `eventDate`
- `language`
- `country`
- `sourceType`
- `url`
- `archivedUrl`
- `provenanceType` (original / republication / archive / translation / secondary)
- `evidenceGrade`
- `accessDate`
- `rightsNote`
- `reliabilityNote`
- `claims`
- `people`
- `events`
- `places`
- `media`

## Article
المقال مادة تحريرية تعتمد على سجلات المصادر ولا تستبدلها.

- `id`
- `titleAr` / `titleEn`
- `publisher`
- `author`
- `publicationDate`
- `url`
- `summaryAr` / `summaryEn`
- `people`
- `events`
- `places`
- `sourceId`
- `confidence`

## Media
يشمل الصور والفيديو والصوت ولقطات الصحف ونسخ صفحات الويب ومواد التواصل الاجتماعي والوثائق المصورة.

- `id`
- `mediaType`
- `titleAr` / `titleEn`
- `captionAr` / `captionEn`
- `createdDate`
- `publishedDate`
- `datePrecision`
- `location`
- `people`
- `event`
- `creator`
- `publisher`
- `source`
- `originalUrl`
- `archivedUrl`
- `rightsStatus`
- `provenance`
- `derivativeOf`
- `storageKey`
- `altTextAr` / `altTextEn`
- `transcript`
- `notes`

## Document
- `id`
- `titleAr` / `titleEn`
- `documentType`
- `date`
- `issuer`
- `descriptionAr` / `descriptionEn`
- `storageKey`
- `source`
- `rights`
- `ocrText`
- `confidence`

## Claim
الـClaim هو أصغر وحدة تاريخية قابلة للإسناد، وليس فقرة كاملة.

- `id`
- `subjectId`
- `predicate`
- `objectId` أو `value`
- `dateContext`
- `sources`
- `status`
- `confidence`
- `notes`

مثال:
`claim-wissa-ordination-1991`

## Relationship
- `id`
- `fromType`
- `fromId`
- `relationType`
- `toType`
- `toId`
- `startDate`
- `endDate`
- `sources`
- `confidence`
- `notes`

### مفردات العلاقات الأولية
`parent_of`, `child_of`, `spouse_of`, `sibling_of`, `mentor_of`, `student_of`, `friend_of`, `served_at`, `ordained_by`, `participated_in`, `witnessed`, `documented`, `occurred_at`, `published_by`, `republished_from`, `depicts`, `mentions`, `corroborates`, `contradicts`, `related_to`.

## Evidence / Confidence
- `verified` — مدعوم بمصدر قوي أو تقارب مستقل واضح.
- `corroborated` — تؤيده مصادر مستقلة متعددة.
- `reported` — موثق في مصدر لكنه لم يثبت استقلاليًا بعد.
- `family_testimony` — معلومة مقدمة من الأسرة وموسومة بذلك.
- `oral_history` — شهادة منسوبة إلى شاهد/راوٍ.
- `research_lead` — خيط بحثي يحتاج تحققًا.
- `disputed` — توجد أدلة متعارضة جوهريًا.
- `excluded` — هوية/معلومة ثبت عدم صلتها أو عدم صحتها.

## Principal entity
`person-wissa-sobhy-tadrous`

العربية: **القمص ويصا صبحي تادرس**  
English: **Archpriest Wissa Sobhy Tadrous**

هذا الكيان هو مركز الشبكة التاريخية للمشروع.

## Localization
اللغة حقل للعرض والمحتوى، لا هوية جديدة. يمكن إضافة `fr`, `de`, `it`, `es` وغيرها لاحقًا دون إنشاء كيانات مكررة.

## Privacy
وجود الحقل في النموذج لا يعني وجوب نشره. المعلومات الحساسة عن الأشخاص الأحياء تخضع لمراجعة نشر مستقلة.

## قاعدة ذهبية
**المصدر لا يجعل الادعاء صحيحًا تلقائيًا؛ بل نقيّم المصدر والادعاء والسياق والعلاقة بالواقعة.**
