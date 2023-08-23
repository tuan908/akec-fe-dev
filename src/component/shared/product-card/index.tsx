import { type TImage } from '@/db/image.repository'
import { chonburi } from '@/util'
import { For } from 'million/react'
import { useRouter } from 'next/router'
import styles from './product-card.module.scss'

type ProductCardProps = {
  previewImageUrl: string
  name: string
  price: number
  onClick?: () => Promise<boolean>
}

export const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  previewImageUrl,
  name,
  price,
  onClick
}) => {
  return (
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
  )
}

export default function ProductCollection({ imgUrls }: { imgUrls: TImage[] }) {
  const router = useRouter()

  return (
    <div className='w-11/12 m-auto p-8 grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <For each={imgUrls} memo>
        {(url, index) => (
          <ProductCard
            key={index}
            name={`Product ${index}`}
            price={1000}
            previewImageUrl={url.url}
            onClick={() => router.push(`/product/${index}`)}
          />
        )}
      </For>
    </div>
  )
}