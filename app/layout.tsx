import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Projects Genie - High-Quality MBA, BBA & PGDM Project Reports",
  description:
    "Trusted by IIT MBA students. Get plagiarism-free, custom-written project reports delivered on time. Expert academic writing services for MBA, BBA, and PGDM students.",
  keywords:
    "MBA projects, BBA projects, PGDM projects, academic writing, project reports, university guidelines, plagiarism-free",
  authors: [{ name: "Projects Genie" }],
  openGraph: {
    title: "Projects Genie - Your Academic Project Partner",
    description: "High-quality, plagiarism-free MBA, BBA & PGDM project reports delivered on time",
    url: "https://projectsgenie.com",
    siteName: "Projects Genie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Genie - Academic Project Writing Services",
    description: "Trusted by top university students for high-quality project reports",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
