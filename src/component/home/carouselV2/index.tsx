import { TImage } from '@/db/image.repository'
import { motion, useAnimate } from 'framer-motion'
import dynamic from 'next/dynamic'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'

const Image = dynamic(() => import('next/image'))
const ChevronLeftIcon = dynamic(() => import('@mui/icons-material/ChevronLeft'))
const ChevronRightIcon = dynamic(
  () => import('@mui/icons-material/ChevronRight')
)

export default function CarouselV2({ imgUrls }: { imgUrls: TImage[] }) {
  const [scope, animate] = useAnimate()
  const [carouselIndex, setIndex] = useState(0)
  const itemRef = useRef<HTMLDivElement>(null)

  const handleDecrement: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    setIndex(prevIndex => (prevIndex >= 1 ? prevIndex - 1 : prevIndex))
  }

  const handleIncrement: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    // Display 3 images (lg/xl/2xl)
    setIndex(prevIndex => (prevIndex < 9 ? prevIndex + 1 : prevIndex))
  }

  useEffect(() => {
    animate(
      'div',
      {
        x: `calc(-${itemRef?.current?.offsetWidth}px * ${carouselIndex})`
      },
      { ease: 'easeInOut' }
    )
  }, [carouselIndex])

  return (
    <div className='w-3/4 flex flex-row m-auto justify-center items-center'>
      <motion.button onClick={handleDecrement}>
        <ChevronLeftIcon className='text-4xl md:text-6xl cursor-pointer outline-none' />
      </motion.button>
      <motion.div
        className='cursor-grab overflow-hidden w-3/5 mx-auto touch-none my-10 relative flex flex-row'
        ref={scope}
      >
        {imgUrls.map((url, urlIndex) => (
          <motion.div
            key={urlIndex}
            className='min-w-full lg:min-w-1/3 p-4 rounded-lg pointer-events-none'
            ref={itemRef}
          >
            <Image
              className={`rounded-md shadow-lg h-full ${
                urlIndex === carouselIndex + 1
                  ? `scale-105 ease-in-out duration-300`
                  : `scale-95 ease-in-out duration-300`
              }`}
              src={url.url}
              width={1920}
              height={3411}
              alt=''
              loading='lazy'
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.button onClick={handleIncrement}>
        <ChevronRightIcon className='text-4xl md:text-6xl cursor-pointer outline-none' />
      </motion.button>
    </div>
  )
}
