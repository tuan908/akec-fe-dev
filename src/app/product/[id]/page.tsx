import productApi from '@/features/product/product.api'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/shared/Layout'))
const Loading = dynamic(() => import('@/components/shared/Loading'), {
  ssr: false
})
const BirdNestError = dynamic(() => import('@/components/shared/Error'), {
  ssr: false
})
const ProductHeader = dynamic(() => import('@/components/ProductDetail/Header'))
const ProductHow = dynamic(() => import('@/components/ProductDetail/How'))
const ProductIngredients = dynamic(
  () => import('@/components/ProductDetail/Ingredients')
)

const Page = async ({ id }) => {
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
