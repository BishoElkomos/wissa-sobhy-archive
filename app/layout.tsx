import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "أرشيف القمص ويصا صبحي تادرس",
    template: "%s | أرشيف القمص ويصا صبحي تادرس",
  },
  description:
    "أرشيف رقمي لتوثيق سيرة وخدمة ومسيرة القمص ويصا صبحي تادرس، مع المصادر والصور والوثائق والأحداث المرتبطة به.",
  metadataBase: new URL("https://wissa-sobhy-archive.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    title: "أرشيف القمص ويصا صبحي تادرس",
    description: "أرشيف رقمي موثق للسيرة والخدمة والتاريخ والمصادر.",
    siteName: "أرشيف القمص ويصا صبحي تادرس",
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
