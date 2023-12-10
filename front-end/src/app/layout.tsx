import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JA',
  description: 'Junior Aliy\' blog. There are life, technology and bussiness idea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#042548]`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
