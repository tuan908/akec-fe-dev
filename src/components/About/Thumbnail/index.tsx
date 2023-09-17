import { useAppDispatch, useAppSelector } from '@/app/hooks'
import {
  carouselIndexSelector,
  initTotal,
  nextSlide,
  prevSlide,
  toSlide
} from '@/features/ui/carousel/carousel.slice'
import clsx from 'clsx'
import { AnimatePresence, m } from 'framer-motion'
import { For } from 'million/react'
import dynamic from 'next/dynamic'
import {
  useCallback,
  useEffect,
  useRef,
  type FC,
  type MouseEventHandler
} from 'react'

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
  const timerIntervalRef = useRef<NodeJS.Timeout>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initTotal(colors.length))
    return () => clearInterval(timerIntervalRef.current)
  }, [])

  const slideIndex = useAppSelector(carouselIndexSelector)

  const startTimer = useCallback(() => {
    timerIntervalRef.current = setInterval(() => {
      dispatch(nextSlide())
    }, 5000)
  }, [])

  const stopTimer = useCallback(() => {
    clearInterval(timerIntervalRef.current)
    timerIntervalRef.current = undefined
  }, [])

  useEffect(() => {
    startTimer()
  }, [startTimer])

  return (
    <div className='w-full px-2'>
      <AnimatePresence>
        <For each={colors}>
          {(color, index) => (
            <NextLink href={`/post/${index}`} key={index}>
              <m.div
                className='h-[536px]'
                style={{
                  backgroundColor: color,
                  display: index === slideIndex ? 'block' : 'none'
                }}
                onMouseEnter={() => stopTimer()}
                onMouseLeave={() => startTimer()}
              >
                <Slide src='' index={index + 1} />
              </m.div>
            </NextLink>
          )}
        </For>
      </AnimatePresence>
      <div className='m-auto flex justify-center p-6 items-center'>
        <ChevronLeftIcon
          className='text-4xl md:text-4xl cursor-pointer outline-none'
          onClick={() => dispatch(prevSlide())}
        />
        <div className='px-4 flex justify-center items-center'>
          <For each={sample}>
            {num => (
              <Indicator
                key={num}
                active={slideIndex === num}
                onClick={() => dispatch(toSlide(num))}
              />
            )}
          </For>
        </div>
        <ChevronRightIcon
          className='text-4xl md:text-4xl cursor-pointer outline-none'
          onClick={() => dispatch(nextSlide())}
        />
      </div>
    </div>
  )
}

function Slide(props: ThumbnailSlideProps) {
  return (
    <div className='relative flex justify-center items-center'>
      <h1 className='text-white text-3xl text-center'>Slide {props.index}</h1>
      {/* <Image src={props.src} fill alt='' /> */}
    </div>
  )
}

const Indicator: FC<ThumbnailIndicatorProps> = props => {
  const classes = clsx(
    'w-4 h-4 z-9999 inline-block mx-2 rounded-full hover:cursor-pointer',
    props.active
      ? 'bg-indicatorActive hover:bg-indicatorInactive'
      : 'bg-indicatorInactive hover:bg-indicatorActive'
  )

  return <button className={classes} onClick={props.onClick} />
}

type ThumbnailSlideProps = { src: string; index: number }

type ThumbnailIndicatorProps = {
  active: boolean
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}