import { wrapper } from '@/app/store'
import productApi from '@/features/product/product.api'
import { type InferGetServerSidePropsType } from 'next'
import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'
import { type NextPageWithLayout } from '@/types'

const Layout = dynamic(() => import('@/component/shared/layout'))
const Loading = dynamic(() => import('@/component/shared/loading'), {
  ssr: false
})
const BirdNestError = dynamic(() => import('@/component/shared/error'), {
  ssr: false
})
const ProductHeader = dynamic(() => import('@/component/product-detail/header'))
const ProductHow = dynamic(() => import('@/component/product-detail/how'))
const ProductIngredients = dynamic(
  () => import('@/component/product-detail/ingredients')
)

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const { data, isLoading, isError } = productApi.useGetProductByIdQuery(id)

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
export default Page

Page.getLayout = (page: ReactElement) => {
  return <Layout pageTitle='Sản phẩm | '>{page}</Layout>
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ctx => {
    const id = ctx.params?.id

    if (typeof id === 'string') {
      store.dispatch(
        productApi.endpoints.getProductById.initiate(Number.parseInt(id))
      )
    }

    await Promise.allSettled(store.dispatch(productApi.util.getRunningQueriesThunk()))

    return { props: { id: Number.parseInt(id!?.toString()) } }
  }
)