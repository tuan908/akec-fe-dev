import dynamic from 'next/dynamic'
import { type ReactNode } from 'react'
import styles from './layout.module.scss'

const Footer = dynamic(() => import('../footer'))
const Navbar = dynamic(() => import('../navbar'))
const Head = dynamic(() => import('next/head'))

type LayoutProps = {
  children: ReactNode
  pageTitle: string
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/png' href='/assets/image/logo.jpg' />
      </Head>
      <main
        className={`w-full max-w-screen h-full min-h-screen bg-[#f5ebc5] grid ${styles.layout}`}
      >
        <Navbar />
        <div
          className='w-full h-full max-w-screen'
          style={{ gridArea: 'main' }}
        >
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}
