import dynamic from 'next/dynamic'
import { ReactElement } from 'react'

const Layout = dynamic(() => import('@/component/shared/layout'))

export default function Page() {
  return <div className=''>Account</div>
}

Page.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Tài khoản'>{page}</Layout>
)