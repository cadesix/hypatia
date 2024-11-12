import './globals.css'
import localFont from 'next/font/local'
import Header from './components/Header'

const ppMondwest = localFont({
  src: './fonts/PPMondwest-Regular.otf',
  variable: '--font-ppmondwest',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ppMondwest.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
