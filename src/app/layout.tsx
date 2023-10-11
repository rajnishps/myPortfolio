import "./globals.css"
import type { Metadata } from "next"
import { Inter, Roboto_Mono, JetBrains_Mono } from "next/font/google"
import { Providers } from "./Providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})
const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Learn Next ",
  description: "Bhagwan bharose",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${jetbrains_mono.variable}`}
    >
      <body className=" font-title">
        <Providers>
          <h2 className=" font-primary">layout header Title</h2>
          {children}
          <h2 className=" font-sub">layout footer</h2>
        </Providers>
      </body>
    </html>
  )
}
