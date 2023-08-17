import { wrapper } from '@/app/store'
import postApi from '@/features/post/post.api'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
import { type NextPageWithLayout } from './_app'

const CarouselV2 = dynamic(() => import('@/component/home/carouselV2'), {
  ssr: false
})
const Layout = dynamic(() => import('@/component/shared/layout'))
const ProductCards = dynamic(() => import('@/component/shared/product-card'))
const Thumbnail = dynamic(() => import('@/component/home/thumbnail'))

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
    await Promise.all(store.dispatch(postApi.util.getRunningQueriesThunk()))

    return { props: {} }
  }
)
