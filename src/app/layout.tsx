import { Montserrat } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-screen flex flex-col 2xl:mx-[23rem]'>
          <div className='flex-grow'>
          <Navbar />
          {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
