import { useAppDispatch } from '@/app/hooks'
import { nextSlide, prevSlide } from '@/features/ui/carousel/carousel.slice'
import styled from '@emotion/styled'
import type { FC } from 'react'

type CarouselNavigationProps = {
  currentSlideIndex: number
}

const CarouselNavigation: FC<CarouselNavigationProps> = ({
  currentSlideIndex
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className='z-50 absolute right-2 bottom-2'>
      <SlideNavigationButton
        active={currentSlideIndex === 0}
        onClick={() => dispatch(prevSlide())}
      />
      <SlideNavigationButton
        active={currentSlideIndex === 1}
        onClick={() => dispatch(nextSlide())}
      />
    </div>
  )
}

export default CarouselNavigation

const SlideNavigationButton = styled.span<{ active: boolean }>`
  width: 1rem;
  height: 1rem;
  z-index: 9999;

  display: inline-block;

  margin-left: 0.5rem;
  margin-right: 0.5rem;

  border-radius: 9999px;

  cursor: pointer;

  background-color: ${props =>
    props.active ? 'rgb(116, 116, 116)' : 'rgb(187, 187, 187)'};

  :hover {
    background-color: ${props =>
      !props.active ? 'rgb(187, 187, 187)' : 'rgb(116, 116, 116)'};
  }
`
