import { wrapper } from '@/app/store'
import productApi from '@/features/product/product.api'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'

const Layout = dynamic(() => import('@/component/shared/layout'))
const Loading = dynamic(() => import('@/component/shared/loading'), { ssr: false })
const BirdNestError = dynamic(() => import('@/component/shared/error'), {
  ssr: false
})
const ProductHeader = dynamic(() => import('@/component/product-detail/header'))
const ProductHow = dynamic(() => import('@/component/product-detail/how'))
const ProductIngredients = dynamic(
  () => import('@/component/product-detail/ingredients')
)

const ProductDetailPage = () => {
  const router = useRouter()

  let id = ''
  const _id = router?.query?.id!

  if (typeof _id !== 'undefined') {
    id = _id as string
  }

  const { data, isLoading, isError } = productApi.useGetByIdQuery(id)

  if (isError) return <BirdNestError />

  return isLoading ? (
    <Loading />
  ) : (
    <div className='md:w-9/10 md:mx-auto py-12 md:grid md:grid-flow-row h-full'>
      <ProductHeader data={data!} />
      <ProductHow />
      <ProductIngredients />
    </div>
  )
}
export default ProductDetailPage

ProductDetailPage.getLayout = (page: ReactElement) => {
  return <Layout pageTitle='Sản phẩm | '>{page}</Layout>
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ctx => {
    const id = ctx.params?.id

    if (typeof id === 'string') {
      store.dispatch(productApi.endpoints.getById.initiate(id))
    }

    await Promise.all(store.dispatch(productApi.util.getRunningQueriesThunk()))

    return { props: {} }
  }
)
