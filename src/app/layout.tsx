import type { Metadata } from "next"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Providers from "@/components/Providers"

export const metadata: Metadata = {
  title: "Deepiha Sivakumar | Edge AI & ML Systems Engineer",
  description:
    "Edge AI and ML systems engineer. Computer Science research at IIT Kharagpur, Master of Computer Science at UC Irvine. Neural-network kernels for NPUs, vision-language model research, and systems projects.",
  openGraph: {
    title: "Deepiha Sivakumar | Edge AI & ML Systems Engineer",
    description:
      "Computer Science research at IIT Kharagpur, Master of Computer Science at UC Irvine. Neural-network kernels for NPUs, vision-language model research, and systems projects.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-neutral-900 dark:bg-stone-900 dark:text-neutral-100">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
