import { ReactElement } from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/component/shared/layout'))

export default function Account() {
  return <div className=''>Account</div>
}

Account.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Tài khoản'>{page}</Layout>
)
