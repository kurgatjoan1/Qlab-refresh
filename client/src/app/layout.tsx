import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto , Roboto_Mono, Work_Sans  } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-roboto'
})
const robotoMono = Roboto_Mono({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-roboto-mono'
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-work-sans'
})

export const metadata: Metadata = {
  title: "Qlab - Catalyzing Africa's Digital Future",
  description: "Powering Africa's Next Wave of Tech Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${roboto.variable} ${robotoMono.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
