import { FC } from 'react'

interface Props {
  imageUrl: string
  active?: boolean
}

const CarouselItem: FC<Props> = ({ imageUrl, active }) => (
  <div className={`${active ? '' : 'hidden'} w-full h-full`}>
    <img
      src={imageUrl}
      alt=''
      className='rounded-3xl object-fill h-[433px] w-full'
    />
  </div>
)

export default CarouselItem
