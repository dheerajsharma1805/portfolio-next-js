import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import MySummary from './components/Summary'
import styles from "@/app/page.module.css";
import PageTransitionWrapper from './components/PageTransitionWrapper';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dheeraj Sharma',
  description: 'This portfolio is made on NextJs 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className={styles.childComponentTransition}>
          <MySummary/>
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </div>
      </body>
    </html>
  )
}
