import './globals.css'
import localFont from 'next/font/local'
import HeaderWrapper from './components/HeaderWrapper'
import { Analytics } from '@vercel/analytics/react'

const ppMondwest = localFont({
  src: './fonts/PPMondwest-Regular.otf',
  variable: '--font-ppmondwest',
  display: 'swap',
})

export const metadata = {
  title: 'Hypatia',
  description: 'Design & Product Excellence',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ppMondwest.className}>
      <body>
        <HeaderWrapper />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
