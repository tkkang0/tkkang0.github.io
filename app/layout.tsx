import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taekyung Kang | Biomedical Engineering at Yale",
  description: "Taekyung Kang is a Ph.D. student in Biomedical Engineering at Yale University working on multimodal imaging and systems neuroscience.",
  keywords: ["Taekyung Kang", "Yale Biomedical Engineering", "multimodal imaging", "fMRI", "wide-field optical imaging", "systems neuroscience"],
  authors: [{ name: "Taekyung Kang" }],
  openGraph: {
    type: "website",
    title: "Taekyung Kang | Biomedical Engineering at Yale",
    description: "Multimodal imaging, systems neuroscience, and quantitative biology at Yale University.",
  },
  twitter: {
    card: "summary",
    title: "Taekyung Kang | Biomedical Engineering at Yale",
    description: "Multimodal imaging, systems neuroscience, and quantitative biology at Yale University.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
