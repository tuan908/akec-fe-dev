import { chonburi } from '@/util'

import styles from './product-card.module.scss'
import Skeleton from '@mui/material/Skeleton'

type ProductCardProps = {
  previewImageUrl: string
  name: string
  price: number
  onClick?: () => Promise<boolean>
  isLoading: boolean
}

export default function ProductCard({
  previewImageUrl,
  name,
  price,
  onClick,
  isLoading
}: ProductCardProps) {
  return (
    <>
      {isLoading ? (
        <Skeleton
          variant='rectangular'
          width={200}
          height={200}
          animation='wave'
        />
      ) : (
        <figure className={styles.productCard} onClick={onClick}>
          <div className={styles.productCardImage}>
            <img
              className='w-full h-full rounded-md'
              src={previewImageUrl}
              alt=''
            />
          </div>
          <figcaption className={styles.productCardCaption}>
            <h2 className={`text-xl ${chonburi.className}`}>{name}</h2>
            <h3 className='text-base font-thin py-1'>{`${price} VND`}</h3>
          </figcaption>
        </figure>
      )}
    </>
  )
}
