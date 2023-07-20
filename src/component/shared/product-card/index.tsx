import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import { chonburi } from '@/util'
import { useRouter } from 'next/router'
import { imgUrls } from '../../home/carouselV2'
import styles from './product-card.module.scss'

const Image = dynamic(() => import('next/image'))

type ProductCardProps = {
  previewImageUrl: string
  name: string
  price: number
  onClick?: () => Promise<boolean>
}

const Wrapper = styled.div`
  width: calc(100% / 12 * 11);
  margin: auto;
  padding: 2rem;
  display: grid;
  place-items: center;
  gap: 1.25rem;
`

export const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  previewImageUrl,
  name,
  price,
  onClick
}) => {
  return (
    <figure className={styles.productCard} onClick={onClick}>
      <div className={styles.productCardImage}>
        <Image
          priority
          className='w-full h-full rounded-md'
          src={previewImageUrl}
          width={1920}
          height={1080}
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

export default function ProductCollection() {
  const router = useRouter()

  return (
    <Wrapper className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {imgUrls.map((url, index) => (
        <ProductCard
          key={index}
          name={`Product ${index}`}
          price={1000}
          previewImageUrl={url}
          onClick={() => router.push(`/product/${index}`)}
        />
      ))}
    </Wrapper>
  )
}
