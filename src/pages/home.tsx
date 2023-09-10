import { wrapper } from '@/app/store'
import postApi from '@/features/post/post.api'
import { type NextPageWithLayout } from '@/types'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { type ReactElement } from 'react'

const CarouselV2 = dynamic(() => import('@/components/Home/CarouselV2'), {
  ssr: false
})
const Layout = dynamic(() => import('@/components/shared/Layout'))
const ProductCards = dynamic(() => import('@/components/shared/ProductCardV1'))
const Thumbnail = dynamic(() => import('@/components/Home/Thumbnail'))

const Page: NextPageWithLayout = () => {
  const { data } = postApi.useGetImagesQuery()

  return (
    <>
      <Thumbnail />

      <ProductCards imgUrls={data!} />

      <Slogan>Chúng mình biết bạn có rất nhiều sự lựa chọn</Slogan>
      <Slogan>Cảm ơn bạn đã đặt niềm tin nơi AKEC</Slogan>

      <CarouselV2 imgUrls={data!} />
    </>
  )
}

export default Page

Page.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Trang chủ'>{page}</Layout>
)

const Slogan = styled.h1`
  width: 60%;

  margin: 2rem auto;

  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;

  font-family: 'Brush Script MT Italic';
`

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    store.dispatch(postApi.endpoints.getImages.initiate())
    await Promise.allSettled(store.dispatch(postApi.util.getRunningQueriesThunk()))

    return { props: {} }
  }
)
