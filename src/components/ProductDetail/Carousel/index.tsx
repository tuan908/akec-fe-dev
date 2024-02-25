import {
  carouselSlice,
  nextSlide,
  prevSlide
} from '@/lib/redux/carousel/carousel.slice'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { Product } from '@/lib/types'

import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function ProductCarousel({
  preview_image_urls
}: Pick<Product, 'preview_image_urls'>) {
  const dispatch = useAppDispatch()
  const slideIndex = useAppSelector(carouselSlice.selectSlice)
  return (
    <>
      <div className='relative flex-[0.45] w-full'>
        {preview_image_urls.map((url, index) => (
          <div
            key={index}
            className={cn(
              'w-full h-full',
              index === slideIndex.current ? 'block' : 'none'
            )}
          >
            <Image
              src={url}
              alt=''
              className='rounded-3xl object-fill h-[433px] w-full'
              loading='lazy'
              width={400}
              height={400}
            />
          </div>
        ))}
        <div className='z-50 absolute right-2 bottom-2'>
          <NavigateButton
            isActive={slideIndex.current === 0}
            onClick={() => dispatch(prevSlide())}
          />
          <NavigateButton
            isActive={slideIndex.current === 1}
            onClick={() => dispatch(nextSlide())}
          />
        </div>
      </div>
    </>
  )
}

const NavigateButton = ({
  isActive,
  onClick
}: Readonly<{ isActive: boolean; onClick: () => void }>) => {
  return (
    <span
      className={cn(
        'w-4 h-4 z-[9999] inline-block mx-2 rounded-full hover:cursor-pointer',
        isActive
          ? 'bg-[#747474] hover:bg-[#bbbbbb]'
          : 'bg-[#bbbbbb] hover:bg-[#747474]'
      )}
      onClick={onClick}
    />
  )
}
