import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: "Indic Accelerationism",
    template: `%s | Indic Accelerationism`,
  },
  description: "Indic Accelerationism Golden Bird 2047",
  openGraph: {
    images: "/opengraph.png",
    title: "Indic Accelerationism",
    description: "Indic Accelerationism Golden Bird 2047",
    url: "https://inacc.vercel.app/",
    siteName: "Indic Accelerationism",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-35">
        <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[630px] w-full">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
