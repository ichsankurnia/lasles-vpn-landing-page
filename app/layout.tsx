import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LaslesVPN',
  description: 'Landing page VPN LaslesVPN Best VPN For Privacy, Country and Cheapest',
  // change base url of your web (without '/' at the end)
  robots: 'follow, index',
  icons: [
    { rel: "icon", url: '/favicon/android-icon-72x72.png' },
    { rel: "apple-touch-icon", type: 'image/png', url: '/favicon/apple-icon-180x180.png' }
  ],
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status 
  authors: [{ name: 'ichsankurnia', url: 'https://ichsankurnia-portfolio.vercel.app' }],
};

export const viewport: Viewport = {
  themeColor: '#F53838',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
