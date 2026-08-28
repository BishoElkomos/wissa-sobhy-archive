# مخطط السجل الموحد

كل سجل جديد يجب أن يلتزم بهذا الحد الأدنى.

## Event
```yaml
id: EVENT-YYYY-MM-DD-SLUG
title:
date:
date_precision: exact|month|year|range|unknown
people: []
places: []
institutions: []
claims: []
sources: []
media: []
confidence: green|blue|yellow|orange|red
conflicts: []
open_questions: []
notes:
```

## Claim
```yaml
id: CLAIM-XXXX
statement:
subject:
predicate:
object:
sources: []
confidence:
status: confirmed|supported|oral-history|lead|disputed
```

## Source
```yaml
id: SRC-XXXX
type: primary|secondary|oral-history|media|archive
publisher:
title:
date:
url:
accessed:
archived_copy:
identity_match:
notes:
```

## Person
```yaml
id: PERSON-SLUG
canonical_name:
aliases: []
roles: []
institutions: []
relationships: []
identity_evidence: []
open_questions: []
```

## Media
```yaml
id: MEDIA-XXXX
type: photo|video|audio|scan
url:
date:
source:
event:
people: []
place:
verified: true|false
transcript:
notes:
```

## مبدأ مهم
درجة الثقة تخص **الادعاء**، لا الشخص أو المصدر بالكامل. يمكن أن يكون المصدر نفسه قويًا في معلومة وضعيفًا في أخرى.
