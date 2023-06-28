import styled from '@emotion/styled'
import Head from 'next/head'
import { PropsWithChildren } from 'react'

import Footer from '../footer'
import Navbar from '../navbar'

export default function Layout({
  children,
  pageTitle
}: PropsWithChildren & { pageTitle: string }) {
  return (
    <LayoutWrapper>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      <ChildComponentWrapper>{children}</ChildComponentWrapper>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  width: 100%;

  background-color: #f5ebc5;
`
const ChildComponentWrapper = styled.div`
  height: 100%;
  min-height: 100dvh;

  background-color: #f5ebc5;

  padding-bottom: 2.5rem;
`
