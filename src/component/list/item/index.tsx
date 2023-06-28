import { TProduct } from '@/types'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

const ProductCard: FunctionComponent<{ itemProps: TProduct }> = ({
  itemProps
}) => {
  const router = useRouter()
  const { id: productId, name: productName, price: price } = itemProps

  const url = `/product/${productId}`

  const handleClick = () => {
    router.push(url, url, {
      scroll: true
    })
  }

  return (
    <div
      className='w-full flex justify-center items-center relative shadow-md hover:cursor-pointer'
      key={productId}
      onClick={handleClick}
    >
      <ProductCardImageStyled
        srcSet='https://pbs.twimg.com/media/FhcJwmqUoAAJR1J?format=jpg&name=small'
        alt='@tokio0131'
      />
      <div className='absolute bottom-2.5 left-2.5'>
        <p>{productName}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ProductCard

const ProductCardImageStyled = styled.img`
  @keyframes animatePicture {
    from {
      transform: translate3d(0);
    }

    to {
      transform: translate3d(0);
    }
  }

  .animatedPicture {
    animation-name: animatePicture;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0, 0, 1, 1);
    animation-fill-mode: backwards;
  }
`
