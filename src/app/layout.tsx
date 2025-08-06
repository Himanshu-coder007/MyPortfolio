import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himanshu Nagose | Full Stack Developer",
  description: "Portfolio of Himanshu Nagose, a Full Stack Developer specializing in modern JavaScript frameworks.",
  keywords: [
    "Himanshu Nagose",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio"
  ],
  authors: [{ name: "Himanshu Nagose" }],
  openGraph: {
    title: "Himanshu Nagose | Full Stack Developer",
    description: "Portfolio of Himanshu Nagose, a Full Stack Developer specializing in modern JavaScript frameworks.",
    url: "https://yourdomain.com",
    siteName: "Himanshu Nagose Portfolio",
    images: [
      {
        url: "https://yourdomain.com/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Nagose | Full Stack Developer",
    description: "Portfolio of Himanshu Nagose, a Full Stack Developer specializing in modern JavaScript frameworks.",
    images: ["https://yourdomain.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white transition-colors duration-300 dark:bg-gray-900 dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-6rem)] pt-24">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}