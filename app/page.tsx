const highlights = [
  { label: "السيرة", title: "رحلة خدمة تمتد لأكثر من ثلاثة عقود", text: "مسار زمني يُبنى من المصادر والوثائق والصور، مع الحفاظ على الفرق بين المعلومة الموثقة والرواية الشخصية." },
  { label: "التاريخ", title: "ديرمواس ودلجا في سياق واحد", text: "منصة قابلة للتوسع لتوثيق الكنائس والأماكن والأحداث والشخصيات التي صنعت ذاكرة المنطقة." },
  { label: "المصادر", title: "كل قصة لها أثر يمكن الرجوع إليه", text: "سجل واضح للمقالات والوثائق والمصادر، مع حفظ أصل المعلومة ودرجة التحقق منها." },
];

const timeline = [
  { year: "1980", title: "بداية المسار المهني", text: "محطة مبكرة في السيرة، تُستكمل تفاصيلها من المصادر والوثائق الأصلية." },
  { year: "1991", title: "السيامة والخدمة", text: "بداية المرحلة الكهنوتية التي ستصبح محورًا أساسيًا في الأرشيف." },
  { year: "1997", title: "رتبة القمصية", text: "محطة موثقة في المسيرة وتُعرض داخل خط زمني قابل للتوسع." },
  { year: "2007", title: "ديرمواس في الصحافة", text: "فصل أرشيفي مهم نعيد بناءه من التغطيات المعاصرة والمصادر الأصلية." },
  { year: "2013", title: "ديرمواس ودلجا", text: "مواد صحفية وصور وشهادات تشكل أحد أغنى فصول الأرشيف الجاري توثيقه." },
  { year: "2026", title: "35 عامًا من الخدمة", text: "محطة حديثة تفتح بابًا لتوثيق السيرة كاملة وربطها بتاريخ الإيبارشية." },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">تخطَّ إلى المحتوى</a>
      <header className="site-header">
        <nav className="nav" aria-label="التنقل الرئيسي">
          <a className="brand" href="#top" aria-label="أرشيف القمص ويصا صبحي">
            <span className="brand-mark" aria-hidden="true">W</span>
            <span>أرشيف القمص ويصا صبحي<small>سجل · ذاكرة · مصادر</small></span>
          </a>
          <div className="nav-links">
            <a href="#story">السيرة</a><a href="#timeline">الخط الزمني</a><a href="#archive">الأرشيف</a><a href="#sources">المصادر</a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div>
            <span className="eyebrow">أرشيف تاريخي رقمي · ديرمواس ودلجا</span>
            <h1>ذاكرة خدمة.<br />سجلٌّ لا يضيع.</h1>
            <p>أرشيف رقمي يوثق سيرة القمص ويصا صبحي تادرس، ويجمع حولها الأشخاص والأماكن والأحداث والصور والوثائق والمصادر في تجربة واحدة هادئة، دقيقة، وقابلة للنمو.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#timeline">استكشف الخط الزمني</a>
              <a className="btn btn-secondary" href="#archive">ادخل الأرشيف</a>
            </div>
          </div>
          <div className="portrait-card" role="img" aria-label="مساحة مخصصة للصورة الرئيسية للقمص ويصا صبحي">
            <div className="portrait-placeholder"><div><strong>القمص ويصا صبحي تادرس</strong><span>الصورة الرئيسية للأرشيف ستوضع هنا بعد اعتماد الصورة الأصلية.</span></div></div>
          </div>
        </section>

        <section className="section" aria-label="أرقام الأرشيف">
          <div className="section-inner stats">
            <div className="stat"><strong>35+</strong><span>عامًا من الخدمة</span></div>
            <div className="stat"><strong>1991</strong><span>بداية المرحلة الكهنوتية</span></div>
            <div className="stat"><strong>∞</strong><span>سجل قابل للتوسع</span></div>
            <div className="stat"><strong>∞</strong><span>مصادر ومواد قابلة للربط</span></div>
          </div>
        </section>

        <section id="story" className="section section-alt">
          <div className="section-inner">
            <div className="section-heading"><h2>ليس موقعًا فقط.</h2><p>إنه مشروع لحفظ الذاكرة: نبدأ بسيرة واحدة، ثم نفتح الطريق لتاريخ الأشخاص والأماكن والمؤسسات والأحداث المحيطة بها.</p></div>
            <div className="cards">{highlights.map((item) => <article className="card" key={item.title}><span className="card-kicker">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>

        <section id="timeline" className="section">
          <div className="section-inner">
            <div className="section-heading"><h2>الخط الزمني</h2><p>محطات أولية، وسيتم تحويلها إلى سجلات موثقة ومترابطة مع المصادر والصور والوثائق.</p></div>
            <div className="timeline">{timeline.map((item) => <article className="timeline-item" key={item.year}><span className="timeline-year">{item.year}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>

        <section id="archive" className="section section-alt">
          <div className="section-inner">
            <div className="section-heading"><h2>أبواب الأرشيف</h2><p>بنية صُممت منذ البداية لتتوسع من السيرة الشخصية إلى تاريخ ديرمواس والإيبارشية.</p></div>
            <div className="cards">
              {[["01","الأشخاص","ويصا صبحي، الأنبا أغابيوس، الكهنة، الصحفيون والشخصيات المرتبطة بالأحداث."],["02","الأحداث","سجل زمني للأحداث مع التاريخ والمكان والأشخاص والمصادر."],["03","الأماكن والكنائس","ديرمواس، دلجا، الكنائس والأديرة والأماكن ذات القيمة التاريخية."],["04","الأرشيف الصحفي","مقالات وتغطيات مع الكاتب والناشر والتاريخ والرابط ونسخ الأرشفة."],["05","الصور والوسائط","صور وفيديو ووثائق مع بيانات provenance وحقوق الاستخدام."],["06","المصادر","صفحة مرجعية تحفظ أثر كل معلومة ودرجة التحقق منها."]].map(([num,title,text]) => <article className="card" key={num}><span className="card-kicker">{num}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="sources" className="search-band">
          <div className="section-inner" style={{textAlign:"center"}}><span className="eyebrow">البحث في الذاكرة</span><h2 style={{fontFamily:"Georgia, serif", fontSize:"clamp(2rem,4vw,3.5rem)", margin:".5rem 0"}}>ابحث في الأرشيف</h2><p style={{color:"#d8dde0"}}>البحث سيصبح شاملًا للأشخاص والأحداث والأماكن والمصادر والوسائط مع تشغيل قاعدة البيانات.</p><div className="search-box"><input aria-label="ابحث في الأرشيف" placeholder="مثال: ديرمواس، 2013، نادر شكري..." /><button type="button">بحث</button></div></div>
        </section>
      </main>

      <footer className="footer"><div className="footer-inner"><span>أرشيف القمص ويصا صبحي تادرس</span><span>مشروع أرشيفي رقمي · يوثق، يربط، ويحفظ.</span></div></footer>
    </>
  );
}
