import dynamic from 'next/dynamic'
import { carouselIndexSelector } from '@/features/ui/carousel/carousel.slice'
import { useAppSelector } from '@/app/hooks'
import type { TProduct } from '@/types'

const CarouselItem = dynamic(() => import('./CarouselItem'))
const CarouselNavigation = dynamic(() => import('./CarouselNavigation'))

export default function ProductCarousel({
  previewImageUrls
}: Pick<TProduct, 'previewImageUrls'>) {
  const currentSlideIndex = useAppSelector(carouselIndexSelector)
  return (
    <>
      <div className='relative flex-[0.45] w-full'>
        {previewImageUrls.map((url, index) => (
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
