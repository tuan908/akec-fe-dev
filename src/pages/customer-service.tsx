import { type NextPageWithLayout } from '@/types'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/shared/Layout'))

const Page: NextPageWithLayout = () => {
  return (
    <div>Page</div>
  )
}

export default Page

Page.getLayout = (page) => <Layout pageTitle='Chính sách khách hàng'>{page}</Layout>