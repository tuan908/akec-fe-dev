import { wrapper } from '@/app/store'
import { ProductCard } from '@/component'
import productApi from '@/features/product/product.api'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'

const Layout = dynamic(() => import('@/component/shared/layout'))
const BirdNestError = dynamic(() =>
  import('@/component').then(m => m.BirdNestError)
)
// const ProgressBar = dynamic(() => import('@/component/shared/progress-bar'), {
//   ssr: false
// })
const Loading = dynamic(() => import('@/component/shared/loading'), {
  ssr: false
})

/**
 *
 * @returns Product List
 */
export default function ProductsPage() {
  const { isLoading, isError } = productApi.useGetAllProductsQuery()

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
          <ProductCard />
        </>
      )}
    </div>
  )
}

ProductsPage.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Danh sách sản phẩm'>{page}</Layout>
)

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    store.dispatch(productApi.endpoints.getAllProducts.initiate())
    await Promise.all(store.dispatch(productApi.util.getRunningQueriesThunk()))

    return {
      props: {}
    }
  }
)
