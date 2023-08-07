import Providers from './components/Providers'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beatrice Wambui Mbugua',
  description: 'A Frontend developer portfolio created using NEXT.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <main className='app relative'>
      <Header/>
      {children}
      </main>
      </Providers>
     

      
      
      </body>
    </html>
  )
}
