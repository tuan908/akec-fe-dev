import dynamic from 'next/dynamic'
import { type FC } from 'react'

const NextImage = dynamic(() => import('next/image'))

type ThumbnailSlideProps = { src: string }

const ThumbnailSlide: FC<ThumbnailSlideProps> = props => {
  return (
    <div className='h-full block relative'>
      <NextImage src={props.src} fill alt='' />
    </div>
  )
}

export default ThumbnailSlide
