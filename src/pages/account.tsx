import dynamic from 'next/dynamic'
import { type ReactElement } from 'react'

const Layout = dynamic(() => import('@/components/shared/Layout'))

export default function Page() {
  return <div className=''>Account</div>
}

Page.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Tài khoản'>{page}</Layout>
)