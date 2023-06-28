import Carousel from '@/component/carousel'
import type { TProduct } from '@/types'
import { FunctionComponent } from 'react'
import DetailText from './ProductDetailText'

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
      <DetailText data={props.data} />
    </div>
  )
}

export default ProductHeader
