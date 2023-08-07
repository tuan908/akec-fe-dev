import { wrapper } from '@/app/store'
import { ProductCard } from '@/component'
import postApi from '@/features/post/post.api'
import productApi from '@/features/product/product.api'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
import styled from '@emotion/styled'
import { For } from 'million/react'
import { useRouter } from 'next/router'

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
  const { isLoading: isImageLoading, data } = postApi.useGetImagesQuery()
  const router = useRouter()
  if (isError) return <BirdNestError />

  return (
    <div className='mx-auto h-full mb-12'>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <For each={data!}>
            {(url, index) => (
              <ProductCard
                key={index}
                name={`Product ${index}`}
                price={1000}
                previewImageUrl={url.url}
                onClick={() => router.push(`/product/${index}`)}
                isLoading={isImageLoading}
              />
            )}
          </For>
        </Wrapper>
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
    store.dispatch(postApi.endpoints.getImages.initiate())
    await Promise.all(store.dispatch(productApi.util.getRunningQueriesThunk()))
    await Promise.all(store.dispatch(postApi.util.getRunningQueriesThunk()))
    return {
      props: {}
    }
  }
)

const Wrapper = styled.div`
  width: calc(100% / 12 * 11);
  margin: auto;
  padding: 2rem;
  display: grid;
  place-items: center;
  gap: 1.25rem;
`
