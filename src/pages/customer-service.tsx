import { Layout } from '@/component'
import { type NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <div>Page</div>
  )
}

export default Page

Page.getLayout = (page) => <Layout pageTitle='Chính sách khách hàng'>{page}</Layout>