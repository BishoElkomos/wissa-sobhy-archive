import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wissa-sobhy-archive.vercel.app"),
  title: {
    default: "أرشيف القمص ويصا صبحي تادرس",
    template: "%s | أرشيف القمص ويصا صبحي",
  },
  description:
    "أرشيف رقمي يوثق سيرة وخدمة القمص ويصا صبحي تادرس، والأحداث والأشخاص والأماكن والمصادر المرتبطة بتاريخ ديرمواس ودلجا.",
  keywords: [
    "القمص ويصا صبحي",
    "ويصا صبحي تادرس",
    "ديرمواس",
    "دلجا",
    "إيبارشية ديرمواس",
    "الأنبا أغابيوس",
    "أرشيف تاريخي",
  ],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    title: "أرشيف القمص ويصا صبحي تادرس",
    description:
      "سجل رقمي للذاكرة والخدمة والمصادر والأحداث المرتبطة بالقمص ويصا صبحي تادرس.",
    siteName: "أرشيف القمص ويصا صبحي",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
