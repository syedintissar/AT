import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";

const geistSans = localFont({
  src: "../../public/fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../../public/fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Alhawaj Tech | Good Ideas. Great Software.",
    template: "%s | Alhawaj Tech",
  },
  description:
    "Alhawaj Tech delivers innovative digital solutions that help businesses build, scale, secure, and succeed in a rapidly evolving digital world. Expert DevOps, Cloud, Web & App Development, Cybersecurity, and UI/UX.",
  keywords: [
    "Alhawaj Tech",
    "Digital Transformation",
    "DevOps Solutions",
    "Cloud Computing",
    "Web Design and Development",
    "Mobile App Development",
    "Cybersecurity",
    "eCommerce Platforms",
    "UI/UX Design",
    "Software Engineering Agency",
  ],
  authors: [{ name: "Alhawaj Tech" }],
  creator: "Alhawaj Tech",
  publisher: "Alhawaj Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alhawajtech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alhawaj Tech | Transforming Ideas Into Digital Experiences",
    description:
      "Alhawaj Tech delivers innovative digital solutions that help businesses build, scale, secure, and succeed in a rapidly evolving digital world.",
    url: "https://alhawajtech.com",
    siteName: "Alhawaj Tech",
    images: [
      {
        url: "/logo.png",
        width: 375,
        height: 153,
        alt: "Alhawaj Tech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alhawaj Tech | Transforming Ideas Into Digital Experiences",
    description:
      "Innovative digital solutions, DevOps, Cloud, Web & Mobile Development, Cybersecurity, and UI/UX.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className="min-h-screen font-sans">
        <MotionProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
