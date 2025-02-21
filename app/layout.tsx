import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ScrollDirectionProvider } from "@/components/ScrollDirectionProvider";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import Header from "@/components/template/header";
import Content from "@/components/template/content";
import Footer from "@/components/template/footer";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Fabrice Werger / Creative Developer",
  description:
    "Fabrice Werger is a creative developer based in Rotterdam, the Netherlands. He is passionate about creating interactive experiences and tools for the web.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fabricewerger.com",
    siteName: "Fabrice Werger",
    title: "Fabrice Werger / Creative Developer",
    description:
      "Fabrice Werger is a creative developer based in Rotterdam, the Netherlands. He is passionate about creating interactive experiences and tools for the web.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fabrice Werger - Creative Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabrice Werger / Creative Developer",
    description:
      "Fabrice Werger is a creative developer based in Rotterdam, the Netherlands. He is passionate about creating interactive experiences and tools for the web.",
    creator: "@fabricewerger",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    //TODO: set false when production is ready
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fabricewerger.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth antialiased focus:scroll-auto")}
    >
      <body
        data-scrolling-started="false"
        data-scrolling-direction="up"
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-screen flex flex-col",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollDirectionProvider />
          <Header />

          <Content>{children}</Content>

          <Footer />
          <ThemeToggle />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
