import { wrapper } from '@/app/store'
import Thumbnail from '@/components/About/Thumbnail'
import postApi from '@/features/post/post.api'
import productApi from '@/features/product/product.api'
import { type NextPageWithLayout } from '@/types'
import dynamic from 'next/dynamic'
import { type ReactElement } from 'react'

const Layout = dynamic(() => import('@/components/shared/Layout'))
const BirdNestError = dynamic(() => import('@/components/shared/Error'))
// const ProgressBar = dynamic(() => import('@/components/shared/progress-bar'), {
//   ssr: false
// })
const ProductCard = dynamic(() => import('@/components/shared/ProductCardV1'))
const Loading = dynamic(() => import('@/components/shared/Loading'), {
  ssr: false
})

/**
 *
 * @returns Product List
 */
const Page: NextPageWithLayout = () => {
  const { isLoading, isError } = productApi.useGetAllProductsQuery()
  const { data } = postApi.useGetImagesQuery()

  if (isError) return <BirdNestError />

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='mx-auto h-full mb-12'>
      <Thumbnail />
      <ProductCard imgUrls={data!} />
    </div>
  )
}

export default Page

Page.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Danh sách sản phẩm'>{page}</Layout>
)

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    store.dispatch(productApi.endpoints.getAllProducts.initiate())
    store.dispatch(postApi.endpoints.getImages.initiate())
    await Promise.allSettled(
      store.dispatch(productApi.util.getRunningQueriesThunk())
    )
    await Promise.allSettled(
      store.dispatch(postApi.util.getRunningQueriesThunk())
    )
    return {
      props: {}
    }
  }
)