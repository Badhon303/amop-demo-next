import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

// import { ThemeProvider } from "@/components/theme-provider"
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
        <div className="flex">
          <Sidebar />
          <div className="flex-1 h-[76px] border-b-[1px] border-[#eaeaea]">
            <Header />
            <div className="p-3">{children}</div>
          </div>
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
