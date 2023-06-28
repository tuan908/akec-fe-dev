import useParallax from '@/hooks/useParallax'
import styled from '@emotion/styled'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  previewImageUrl: string
  name: string
  price: number
  onClick?: () => Promise<boolean>
}

const ProductCardV2 = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)
  return (
    <SectionStyled onClick={props.onClick}>
      <div ref={ref}>
        <StyledImg src={props.previewImageUrl} alt='' />
      </div>
      <motion.h2 style={{ y }}>style</motion.h2>
    </SectionStyled>
  )
}

export default ProductCardV2

const SectionStyled = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;
  perspective: 500px;

  div {
    width: 242.75px;
    height: 431.25px;
    position: relative;
    max-height: 90vh;
    margin: 20px;
    background: #fff;
    overflow: hidden;
  }
`

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`
