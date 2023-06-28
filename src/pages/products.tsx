import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
import productApi from '@/features/product/product.api'
import { wrapper } from '@/app/store'
import { useRouter } from 'next/router'

const Layout = dynamic(() => import('@/component/shared/layout'))
const ProductCardV2 = dynamic(
  () => import('@/component/shared/product-card-v2')
)
const BirdNestError = dynamic(() =>
  import('@/component').then(m => m.BirdNestError)
)
const ProgressBar = dynamic(() => import('@/component/shared/progress-bar'), {
  ssr: false
})
const Loading = dynamic(() => import('@/component/shared/loading'), {
  ssr: false
})

/**
 *
 * @returns Product List
 */
export default function ProductsPage() {
  const { isLoading, isError, data } = productApi.useGetAllProductsQuery()
  const router = useRouter()

  if (isError) return <BirdNestError />

  return (
    <div className='mx-auto h-full mb-12'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProgressBar />
          {data!?.map((product, index) => (
            <ProductCardV2
              key={index}
              name={product.name}
              price={product.price}
              previewImageUrl='https://pbs.twimg.com/media/FT_xI0jVsAIhdF1?format=jpg&name=4096x4096'
              onClick={() => router.push(`/product/${index}`)}
            />
          ))}
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
