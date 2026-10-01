import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600"],
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mary Tuvei — Digital Marketing, Virtual Assistance & AI Evaluation",
  description:
    "Portfolio of Mary Tuvei: social media management (Instagram & TikTok), CRM and executive support, and law-trained AI evaluation. Based in Nairobi, available remotely.",
  openGraph: {
    title: "Mary Tuvei — Portfolio",
    description:
      "Social media management, virtual & executive assistance, CRM workflows and AI evaluation.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f2ea" },
    { media: "(prefers-color-scheme: dark)", color: "#16130f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
