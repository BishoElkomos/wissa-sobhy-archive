import Link from "next/link";
import { Archive, BookOpen, Camera, FileText, Search, ScrollText } from "lucide-react";

const milestones = [
  ["1980", "بداية المسيرة التعليمية والمهنية"],
  ["1991", "السيامة الكهنوتية وبداية الخدمة"],
  ["1997", "نوال رتبة القمصية"],
  ["2007", "محطة موثقة في تاريخ ديرمواس"],
  ["2013", "ديرمواس ودلجا والأرشيف الصحفي"],
  ["2026", "اليوبيل الخامس والثلاثون"],
];

const features = [
  { icon: BookOpen, title: "السيرة والمسيرة", text: "سيرة زمنية موثقة، تُبنى تدريجيًا من الوثائق والمصادر والشهادات." },
  { icon: ScrollText, title: "الأرشيف الصحفي", text: "فهرس للمقالات والتغطيات مع التاريخ والكاتب والمصدر ودرجة التوثيق." },
  { icon: Camera, title: "الصور والوسائط", text: "أرشيف للصور والفيديوهات مع بيانات المناسبة والمكان والأشخاص وحقوق الاستخدام." },
  { icon: FileText, title: "الوثائق والمصادر", text: "ربط كل معلومة بمصدرها بدل تجميع معلومات بلا سياق أو إثبات." },
  { icon: Archive, title: "الأحداث والأماكن", text: "خريطة معرفية تربط الشخص بالأحداث والكنائس والأماكن عبر السنوات." },
  { icon: Search, title: "بحث ذكي", text: "البحث داخل الأشخاص والأحداث والمصادر والصور والسنوات، مع قابلية التوسع." },
];

export default function Home() {
  return (
    <main className="archive-shell">
      <header className="topbar">
        <div className="container nav">
          <Link href="/" className="brand"><span className="brand-mark">✠</span><span>أرشيف القمص ويصا صبحي</span></Link>
          <nav className="nav-links" aria-label="التنقل الرئيسي">
            <Link href="#story">السيرة</Link><Link href="#timeline">الخط الزمني</Link><Link href="#archive">الأرشيف</Link><Link href="#sources">المصادر</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="kicker">DIGITAL HISTORICAL ARCHIVE · 1991—2026</div>
            <h1>القمص ويصا صبحي تادرس</h1>
            <p className="hero-lead">أرشيف رقمي يوثق السيرة والخدمة والأحداث والصور والوثائق والتغطية الصحفية المرتبطة بمسيرة تمتد لأكثر من ثلاثة عقود.</p>
            <div className="hero-actions"><Link className="button button-primary" href="#story">اكتشف السيرة</Link><Link className="button button-ghost" href="#archive">استكشف الأرشيف</Link></div>
          </div>
          <div className="hero-frame"><div className="photo-placeholder"><span>ستُضاف هنا الصورة الرئيسية المعتمدة بعد تجهيزها أرشيفيًا.</span></div></div>
        </div>
      </section>

      <section className="section" id="timeline">
        <div className="container"><div className="section-head"><div><div className="eyebrow">TIMELINE</div><h2>محطات من المسيرة</h2></div><p className="section-intro">خط زمني أولي سيُراجع ويُوسّع مع كل وثيقة أو مصدر جديد.</p></div>
          <div className="timeline">{milestones.map(([year, text]) => <article className="timeline-card" key={year}><div className="timeline-year">{year}</div><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="archive">
        <div className="container"><div className="section-head"><div><div className="eyebrow">THE ARCHIVE</div><h2>أكثر من سيرة</h2></div><p className="section-intro">قاعدة معرفة تربط الشخص بالحدث والمكان والصورة والمقال والمصدر، مع الحفاظ على سياق كل معلومة.</p></div>
          <div className="features">{features.map(({icon: Icon, title, text}) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="story"><div className="container"><div className="cta"><div><div className="eyebrow">DOCUMENT · VERIFY · PRESERVE</div><h2>نبني السيرة من المصادر، لا من الذاكرة وحدها.</h2><p>كل مادة ستُراجع وتُصنّف وتُربط بمصدرها، مع تمييز المؤكد عما يحتاج إلى تحقق.</p></div><Link className="button button-primary" href="#sources">منهج التوثيق</Link></div></div></section>

      <footer className="footer" id="sources"><div className="container">© 2026 — أرشيف القمص ويصا صبحي تادرس · مشروع توثيقي قابل للتوسع</div></footer>
    </main>
  );
}
