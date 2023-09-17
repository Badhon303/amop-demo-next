// import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Device Management Inventory",
  description: "Device Management Inventory",
  viewport:
    // "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    "width=device-width, minimum-scale=1, maximum-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
        <div className="p-4">
          <Header />
          <Sidebar />
          {children}
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
