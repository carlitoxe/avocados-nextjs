import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Avocados App',
  description: 'Avocados App made with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='text-center'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
