import type React from "react"
import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: 'Ace Digitals Global - Digital Agency & SaaS Solutions',
  description: 'Premium digital services including web development, AI automation, social media marketing, and more.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-brand-dark text-white">
        <Navigation />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
