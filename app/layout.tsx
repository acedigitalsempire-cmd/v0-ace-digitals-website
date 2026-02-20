import type React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
