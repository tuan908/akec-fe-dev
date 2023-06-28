import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'

const CarouselV2 = dynamic(() => import('@/component/home/carouselV2'), {
  ssr: false
})
const Layout = dynamic(() => import('@/component/shared/layout'))
const ProductCards = dynamic(() => import('@/component/shared/product-card'))
const Thumbnail = dynamic(() => import('@/component/home/thumbnail'))

export default function Home() {
  return (
    <>
      <Thumbnail />

      <ProductCards />

      <Slogan>Chúng mình biết bạn có rất nhiều sự lựa chọn</Slogan>
      <Slogan>Cảm ơn bạn đã đặt niềm tin nơi AKEC</Slogan>

      <CarouselV2 />
    </>
  )
}

Home.getLayout = (page: ReactElement) => (
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
