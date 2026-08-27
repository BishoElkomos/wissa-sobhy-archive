# نموذج بيانات أرشيف القمص ويصا صبحي تادرس

هذا المستند هو الأساس قبل إنشاء جداول Convex. لا تُملأ الحقول ببيانات غير موثقة لمجرد استكمال الشكل.

## Person

يمثل شخصًا له علاقة موثقة أو ذات صلة أرشيفية.

الحقول المقترحة:

- `nameAr`
- `nameEn`
- `aliases`
- `role`
- `bio`
- `birthDate` / `deathDate` عند التحقق
- `places`
- `organizations`
- `photo`
- `sources`
- `confidence`
- `notes`

## Event

يمثل واقعة أو مناسبة أو محطة زمنية.

- `titleAr`
- `titleEn`
- `dateStart`
- `dateEnd`
- `datePrecision` (exact / month / year / approximate)
- `summary`
- `description`
- `people`
- `places`
- `organizations`
- `sources`
- `media`
- `confidence`
- `notes`

## Place

- `nameAr`
- `nameEn`
- `aliases`
- `governorate`
- `country`
- `locationText`
- `description`
- `relatedEvents`
- `sources`

## Source

المصدر هو أهم عنصر في التوثيق.

- `title`
- `publisher`
- `author`
- `url`
- `publicationDate`
- `sourceType` (newspaper / church / official / interview / book / archive / video / social / other)
- `language`
- `archivedUrl` عند توفره قانونيًا وتقنيًا
- `accessDate`
- `reliabilityNote`
- `rightsNote`

## Article

يمثل مادة صحفية أو مقالًا منشورًا، ويرتبط بمصدره بدل تكرار بيانات المصدر.

- `title`
- `publisher`
- `author`
- `publicationDate`
- `url`
- `summary`
- `quotedFacts`
- `people`
- `events`
- `places`
- `sourceId`
- `confidence`

## Photo

- `title`
- `caption`
- `date`
- `datePrecision`
- `location`
- `people`
- `event`
- `photographer`
- `source`
- `rights`
- `storageKey`
- `altText`
- `notes`

## Video

- `title`
- `platform`
- `url`
- `date`
- `duration`
- `description`
- `people`
- `events`
- `source`
- `rights`

## Document

- `title`
- `documentType`
- `date`
- `issuer`
- `description`
- `storageKey`
- `source`
- `rights`
- `ocrText` عند توفره
- `confidence`

## Organization

يمثل كنيسة أو إيبارشية أو مؤسسة صحفية أو جهة رسمية أو غيرها.

- `nameAr`
- `nameEn`
- `type`
- `description`
- `places`
- `sources`

## Relationship

للعلاقات التي لا يكفي تمثيلها بحقل مباشر:

- `fromType`
- `fromId`
- `relationType`
- `toType`
- `toId`
- `startDate`
- `endDate`
- `sources`
- `notes`

## Confidence

القيم الموحدة:

- `verified` — مؤكد بمصدر قوي أو أكثر.
- `supported` — تؤيده مصادر موثوقة لكن يحتاج استكمالًا.
- `reported` — منقول من مصدر واحد ولم يُتحقق استقلاليًا.
- `disputed` — توجد روايات أو مصادر متعارضة.
- `unverified` — مادة أرشيفية لم يكتمل التحقق منها.

## قاعدة ذهبية

**المصدر لا يجعل الادعاء صحيحًا تلقائيًا؛ بل نقيّم المصدر والادعاء وعلاقتهما بالواقعة.**
