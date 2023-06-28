import { useAppDispatch } from '@/app/hooks'
import { TProduct } from '@/types'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { IconButton } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'

import { addToCart } from '@/app/features/order/order.slice'
import styles from './Header.module.scss'

interface Props {
  data: Pick<TProduct, 'name' | 'price' | 'userId' | 'id'>
}

export default function DetailText({ data }: Props) {
  const dispatch = useAppDispatch()
  const [position, setPosition] = useState(0)

  const [currentQty, setQuantity] = useState(1)

  const newOrder = {
    ...data,
    orderId: `${data.name}-${data.price}-${new Date().getTime()}`,
    quantity: currentQty
  }

  const handleClick = () => {
    dispatch(addToCart(newOrder))
  }

  const handleIncrement = () => {
    setQuantity(currentQty + 1)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
  }
  const handleDecrement = () => {
    currentQty >= 2 ? setQuantity(currentQty - 1) : setQuantity(1)
  }

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [window.scrollY])

  return (
    <div className='flex-[0.45] relative mt-4'>
      <p className='mt-5'>Normal</p>
      <h1 className='text-5xl mt-6 transition-transform'>
        <span className={position > 300 ? '' : styles.animatedTextRight}>
          124
        </span>
        <span className={position > 300 ? '' : styles.animatedTextDown}>
          {data.name}
        </span>
      </h1>
      <h1 className='text-5xl mt-6 transition-transform'>
        <span className={position > 300 ? '' : styles.animatedTextUp}>
          {data.name}
        </span>
        <span className={position > 300 ? '' : styles.animatedTextLeft}>
          124
        </span>
      </h1>
      <div className='flex my-8'>
        <h1 className='my-auto'>Số lượng:</h1>
        <IconButton onClick={handleDecrement} disableRipple>
          <Remove />
        </IconButton>
        <input
          value={currentQty}
          type='text'
          className='border-x-2 border-y-2 mx-4 w-[5%] text-center outline-none'
          onChange={e => handleChange(e)}
        />
        <IconButton onClick={handleIncrement} disableRipple>
          <Add />
        </IconButton>
      </div>
      <button
        className={`rounded-lg border-x-2 border-y-2 p-1 flex items-center justify-center hover:bg-black hover:rounded-lg hover:text-white absolute bottom-20 right-4 ' ${
          position > 300 ? '' : styles.expandedButton
        }`}
        onClick={handleClick}
      >
        <Add className='pr-1' />
        Add to cart
      </button>
    </div>
  )
}
