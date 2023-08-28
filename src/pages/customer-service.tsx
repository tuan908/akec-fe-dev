import dynamic from 'next/dynamic'
import { type NextPageWithLayout } from '@/types'

const Layout = dynamic(() => import('@/component/shared/layout'))

const Page: NextPageWithLayout = () => {
  return (
    <div>Page</div>
  )
}

export default Page

Page.getLayout = (page) => <Layout pageTitle='Chính sách khách hàng'>{page}</Layout>