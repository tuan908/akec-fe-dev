import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { type FC } from 'react'
import postStyles from './post.module.scss'

const NextImage = dynamic(() => import('next/image'))

type PostProps = {}

const Posts: FC<PostProps> = () => {
  return (
    <div
      className={clsx(
        'w-3/5 m-auto grid grid-cols-1 pb-8',
        postStyles.areas
      )}
    >
      <div className='w-full flex flex-row gap-x-8'>
        <div className='w-1/2 rotate-90'>
          <NextImage
            src='https://pbs.twimg.com/media/F6O0BqfbcAAzaJH?format=jpg&name=4096x4096'
            width={917}
            height={687.75}
            alt='菌烨tako'
          />
        </div>

        <div className='w-1/2 translate-x-8 flex flex-col justify-center items-center gap-y-2'>
          <h3 className='w-4/5 text-3xl'>Fresh Baskets</h3>
          <p className='w-4/5'>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            Let your users get to know you.
          </p>
        </div>
      </div>

      <div className='w-full flex flex-row gap-x-8'>
        <div className='w-1/2 flex flex-col justify-center items-center gap-y-2'>
          <h3 className='w-4/5 text-3xl'>Fresh Baskets</h3>
          <p className='w-4/5'>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            Let your users get to know you.
          </p>
        </div>

        <div className='w-1/2 rotate-90 translate-x-8'>
          <NextImage
            src='https://pbs.twimg.com/media/F6O0BqfbcAAzaJH?format=jpg&name=4096x4096'
            width={917}
            height={687.75}
            alt='菌烨tako'
          />
        </div>
      </div>

      <div className='w-full flex flex-row gap-x-8'>
        <div className='w-1/2 rotate-90'>
          <NextImage
            src='https://pbs.twimg.com/media/F6O0BqfbcAAzaJH?format=jpg&name=4096x4096'
            width={917}
            height={687.75}
            alt='菌烨tako'
          />
        </div>
        <div className='w-1/2 translate-x-8 flex flex-col justify-center items-center gap-y-2'>
          <h3 className='w-4/5 text-3xl'>Fresh Baskets</h3>
          <p className='w-4/5'>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            Let your users get to know you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Posts
