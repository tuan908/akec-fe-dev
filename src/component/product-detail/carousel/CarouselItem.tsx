import styled from '@emotion/styled'
import { FC } from 'react'

interface Props {
  imageUrl: string
  active: boolean
}

const CarouselItem: FC<Props> = ({ imageUrl, active }) => {
  return (
    <CarouselItemWrapper active={active}>
      <img
        src={imageUrl}
        alt=''
        className='rounded-3xl object-fill h-[433px] w-full'
      />
    </CarouselItemWrapper>
  )
}

export default CarouselItem

const CarouselItemWrapper = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;

  display: ${props => (props.active ? 'block' : 'none')};
`
