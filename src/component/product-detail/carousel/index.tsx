import { useAppSelector } from '@/app/hooks'
import { carouselIndexSelector } from '@/features/ui/carousel/carousel.slice'
import type { TProduct } from '@/types'
import dynamic from 'next/dynamic'

const CarouselItem = dynamic(() => import('./CarouselItem'))
const CarouselNavigation = dynamic(() => import('./CarouselNavigation'))

export default function ProductCarousel({
  preview_image_urls
}: Pick<TProduct, 'preview_image_urls'>) {
  const currentSlideIndex = useAppSelector(carouselIndexSelector)
  return (
    <>
      <div className='relative flex-[0.45] w-full'>
        {preview_image_urls.map((url, index) => (
          <CarouselItem
            key={url}
            imageUrl={url}
            active={index === currentSlideIndex}
          />
        ))}
        <CarouselNavigation currentSlideIndex={currentSlideIndex} />
      </div>
    </>
  )
}
