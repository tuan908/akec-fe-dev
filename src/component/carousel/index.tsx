import { indexSelector } from '@/app/features/carousel/carousel.slice'
import { useAppSelector } from '@/app/hooks'
import type { TProduct } from '@/types'
import CarouselItem from './CarouselItem'
import CarouselNavigation from './CarouselNavigation'

export default function ProductCarousel({
  previewImageUrls
}: Pick<TProduct, 'previewImageUrls'>) {
  const currentSlideIndex = useAppSelector(indexSelector)

  return (
    <>
      <div className='relative flex-[0.45] w-full'>
        {previewImageUrls.map((url, index) => (
          <CarouselItem imageUrl={url} active={currentSlideIndex === index} />
        ))}
        <CarouselNavigation currentSlideIndex={currentSlideIndex} />
      </div>
    </>
  )
}
