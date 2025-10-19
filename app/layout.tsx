import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SecureLife Insurance - ประกันภัยที่คุณไว้วางใจ',
  description: 'ประกันชีวิต ประกันสุขภาพ ประกันอุบัติเหตุ และประกันรถยนต์ ครบวงจร ราคาที่เหมาะสม คุ้มครองสูงสุด',
  keywords: 'ประกันชีวิต, ประกันสุขภาพ, ประกันอุบัติเหตุ, ประกันรถยนต์',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


