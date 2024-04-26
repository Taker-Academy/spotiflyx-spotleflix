import type { Metadata } from "next";
import "./globals.css";
import cn from "classnames";
import  localFont  from 'next/font/local';

const YoutubeFont = localFont({ src: '../components/fonts/Youtube-Sans-font/YoutubeSansBold.woff2' })
const SpotifyFont = localFont({ src: '../components/fonts/Spotify-Font/GothamBold.woff2' })

export const metadata: Metadata = {
  title: "Spotiflyx",
  description: "The new streaming app revolution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
        SpotifyFont.className,
        "h-full bg-background text-foreground",
        )}
        >
          {children}
        </body>
    </html>
  );
}
