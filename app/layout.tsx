import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PLT İnovasyon İçin Özel Teklif | Bromak Agency",
  description:
    "Bromak Agency tarafından PLT İnovasyon için hazırlanmış anahtar teslim reklam ajansı hizmetleri - Strateji, Sosyal Medya, Video Prodüksiyon, Dijital Pazarlama",
  generator: "v0.app",
  icons: {
    icon: "/images/bromak-favicon.png",
    apple: "/images/bromak-favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
