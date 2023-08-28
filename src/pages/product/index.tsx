import { wrapper } from '@/app/store'
import postApi from '@/features/post/post.api'
import productApi from '@/features/product/product.api'
import dynamic from 'next/dynamic'
import { type ReactElement } from 'react'
import { type NextPageWithLayout } from '@/types'

const Layout = dynamic(() => import('@/component/shared/layout'))
const BirdNestError = dynamic(() =>
  import('@/component').then(m => m.BirdNestError)
)
// const ProgressBar = dynamic(() => import('@/component/shared/progress-bar'), {
//   ssr: false
// })
const ProductCard = dynamic(() =>
  import('@/component').then(m => m.ProductCard)
)
const Loading = dynamic(() => import('@/component/shared/loading'), {
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

  return (
    <div className='mx-auto h-full mb-12'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* <ProgressBar /> */}
          {/* {data!?.map((product, index) => (
            <ProductCardV2
              key={index}
              name={product.name}
              price={product.price}
              previewImageUrl='https://pbs.twimg.com/media/FT_xI0jVsAIhdF1?format=jpg&name=4096x4096'
              onClick={() => router.push(`/product/${index}`)}
            />
          ))} */}
          <ProductCard imgUrls={data!} />
        </>
      )}
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
