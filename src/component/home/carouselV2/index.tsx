import { motion, useAnimate } from 'framer-motion'
import dynamic from 'next/dynamic'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'

const Image = dynamic(() => import('next/image'))
const ChevronLeftIcon = dynamic(() => import('@mui/icons-material/ChevronLeft'))
const ChevronRightIcon = dynamic(
  () => import('@mui/icons-material/ChevronRight')
)

export const imgUrls = [
  'https://pbs.twimg.com/media/FT_xI0jVsAIhdF1?format=jpg&name=4096x4096',
  'https://pbs.twimg.com/media/FsYbq6nakAEJ17T?format=jpg&name=4096x4096',
  'https://pbs.twimg.com/media/FstHaoGaEAA0ZHd?format=jpg&name=4096x4096',
  'https://pbs.twimg.com/media/FtgmQz5agAEffJH?format=jpg&name=4096x4096',
  'https://pbs.twimg.com/media/F1wy2WYaYAAd4x6?format=jpg&name=large',
  'https://pbs.twimg.com/media/F07CMl0aMAE_B-P?format=jpg&name=medium',
  'https://pbs.twimg.com/media/Fz3p4RRaMAEf2cv?format=jpg&name=large',
  'https://pbs.twimg.com/media/FzjhiVcXgAU4pUi?format=jpg&name=large',
  'https://pbs.twimg.com/media/FzR9SMFaQAEZoQQ?format=jpg&name=large',
  'https://pbs.twimg.com/media/FyQ4WXhagAAqP2d?format=jpg&name=medium',
  'https://pbs.twimg.com/media/FxRwyboacAID8sV?format=jpg&name=large',
  'https://pbs.twimg.com/media/Fwp7th-akAAwRkC?format=jpg&name=large',
  'https://pbs.twimg.com/media/FwVUTa0aIAEc5RG?format=jpg&name=large',
  'https://pbs.twimg.com/media/Fv0S66EaAAIzb9i?format=jpg&name=large',
  'https://pbs.twimg.com/media/FvLKet2aYAA-TCX?format=jpg&name=large',
  'https://pbs.twimg.com/media/Fuzec4_aUAA-H3m?format=jpg&name=medium',
  'https://pbs.twimg.com/media/Fu-C6vSacAAaQ6Z?format=jpg&name=large',
  'https://pbs.twimg.com/media/FthL0DAWIAA1a4f?format=jpg&name=large',
  'https://pbs.twimg.com/media/FukH1LBaEAMT1yM?format=jpg&name=large',
  'https://pbs.twimg.com/media/FutYRZdaAAMrl_e?format=jpg&name=medium',
  'https://pbs.twimg.com/media/FtcK4uTaQAAll_U?format=jpg&name=large',
  'https://pbs.twimg.com/media/FsY5U8JaYAEbGZ7?format=jpg&name=large',
  'https://pbs.twimg.com/media/FsJu0GhacAATDW4?format=jpg&name=large',
  'https://pbs.twimg.com/media/Fq8a-NAacAE1DZ9?format=jpg&name=large',
  `https://pbs.twimg.com/media/FqDLMZ_aQAE67Z1?format=jpg&name=large`,
  `https://pbs.twimg.com/media/Fp-mzRvacAERidi?format=jpg&name=large`,
  `https://pbs.twimg.com/media/FpF1Q0XaQAEgJeT?format=jpg&name=large`,
  `https://pbs.twimg.com/media/FpAtpVPaUAA8fTE?format=jpg&name=large`,
  `https://pbs.twimg.com/media/FosOW5VaQAAHb0X?format=jpg&name=large`,
  `https://pbs.twimg.com/media/FoNNuGJacAI4Qes?format=jpg&name=large`,
  `https://pbs.twimg.com/media/FnucvLMaYAIpxOZ?format=jpg&name=large`,
  `https://pbs.twimg.com/media/FnfHO8iaQAIQAv8?format=jpg&name=large`,
  `https://pbs.twimg.com/media/FnaHTeEaAAAatX8?format=jpg&name=large`,
  `https://pbs.twimg.com/media/Fm_2ok3acAA3L1n?format=jpg&name=large`,
  `https://pbs.twimg.com/media/Fm1jaj0aMAUjJxr?format=jpg&name=large`,
  `https://pbs.twimg.com/media/FmGrYF-aUAAXOrA?format=jpg&name=medium`,
  `https://pbs.twimg.com/media/FifS1cuagAEjS1A?format=jpg&name=large`,
  `https://pbs.twimg.com/media/FbvRGH0agAATbkJ?format=jpg&name=4096x4096`,
  `https://pbs.twimg.com/media/FYwSm6hUsAAK6M-?format=jpg&name=4096x4096`,
  `https://pbs.twimg.com/media/FLkCimDaIAAlUU6?format=jpg&name=large`
]

export default function CarouselV2() {
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
              src={url}
              width={1920}
              height={3411}
              alt=''
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
