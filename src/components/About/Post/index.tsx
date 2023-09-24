import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { type FC } from 'react'
import postStyles from './post.module.scss'

const NextImage = dynamic(() => import('next/image'))

type PostProps = {
  imagePosition: 'left' | 'right'
}

const Post: FC<PostProps> = ({ imagePosition }) => {
  return (
    <div
      className={clsx(
        'w-1/2 m-auto grid grid-cols-2 gap-4 pb-8',
        postStyles.areas
      )}
    >
      <div
        className={clsx(
          imagePosition === 'left' ? `${postStyles.left} rotate-90` : `${postStyles.right}`
        )}
      >
        <NextImage
          src='https://pbs.twimg.com/media/F6O0BqfbcAAzaJH?format=jpg&name=4096x4096'
          width={917}
          height={687.75}
          alt='菌烨tako'
        />
      </div>
      <div
        className={clsx(
          imagePosition === 'left' ? `${postStyles.right} translate-y-1/3 translate-x-1/3` : postStyles.left,
        )}
      >
        <h3>Fresh Baskets</h3>
        <p>
          I&apos;m a paragraph. Click here to add your own text and edit me. Let
          your users get to know you.
        </p>
      </div>
    </div>
  )
}

export default Post
