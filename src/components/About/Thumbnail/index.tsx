import { useAppDispatch, useAppSelector } from '@/app/hooks'
import {
  carouselIndexSelector,
  initTotal,
  nextSlide,
  prevSlide,
  toSlide
} from '@/features/ui/carousel/carousel.slice'
import { AnimatePresence, m } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import Indicator from './Indicator'
import Slide from './Slide'

const Image = dynamic(() => import('next/image'))
const ChevronLeftIcon = dynamic(() => import('@mui/icons-material/ChevronLeft'))
const ChevronRightIcon = dynamic(
  () => import('@mui/icons-material/ChevronRight')
)
const NextLink = dynamic(() => import('next/link'))

let sample = Array.of(0, 1, 2, 3)
let colors: string[] = []

for (let index = 0; index < sample.length; index++) {
  let color =
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
  colors.push(color)
}

export default function Thumbnail() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initTotal(colors.length))
  }, [])

  const slideIndex = useAppSelector(carouselIndexSelector)

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(nextSlide())
    }, 3000)

    return () => clearTimeout(timer)
  }, [slideIndex, dispatch])

  return (
    <div className='w-full px-2'>
      <AnimatePresence>
        {colors.map((color, index) => (
          <NextLink href={`/post/${index}`} key={index}>
            <m.div
              className='h-[536px]'
              style={{
                backgroundColor: color,
                display: index === slideIndex ? 'block' : 'none'
              }}
            >
              <Slide src={''} />
            </m.div>
          </NextLink>
        ))}
      </AnimatePresence>
      <div className='m-auto flex justify-center p-6 items-center'>
        <ChevronLeftIcon
          className='text-4xl md:text-4xl cursor-pointer outline-none'
          onClick={() => dispatch(prevSlide())}
        />
        <div className='px-4 flex justify-center items-center'>
          {sample.map(num => (
            <Indicator
              key={num}
              active={slideIndex === num}
              onClick={() => dispatch(toSlide(num))}
            />
          ))}
        </div>
        <ChevronRightIcon
          className='text-4xl md:text-4xl cursor-pointer outline-none'
          onClick={() => dispatch(nextSlide())}
        />
      </div>
    </div>
  )
}
