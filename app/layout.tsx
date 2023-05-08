import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TravelBuddy',
  description: 'Personal travel companion finder application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}