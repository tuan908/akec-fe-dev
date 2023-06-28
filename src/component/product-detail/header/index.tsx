import dynamic from 'next/dynamic'
import type { TProduct } from '@/types'
import type { FunctionComponent } from 'react'

const ProductDetailText = dynamic(() => import('./ProductDetailText'), {
  ssr: false
})
const Carousel = dynamic(() => import('@/component/product-detail/carousel'))

interface Props {
  data: TProduct
}

const urls = [
  'https://images-assets.nasa.gov/image/PIA13014/PIA13014~small.jpg',
  'https://images-assets.nasa.gov/image/carina_nebula/carina_nebula~small.jpg'
]

const ProductHeader: FunctionComponent<Props> = props => {
  return (
    <div className='flex flex-row justify-evenly'>
      <Carousel previewImageUrls={urls} />
      <ProductDetailText data={props.data} />
    </div>
  )
}

export default ProductHeader
