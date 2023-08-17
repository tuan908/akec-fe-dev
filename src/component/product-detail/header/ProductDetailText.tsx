import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { addToCart } from '@/features/order/order.slice'
import type { TProduct } from '@/types'
import { chonburi } from '@/util'
import dynamic from 'next/dynamic'
import { useEffect, useState, type ChangeEvent } from 'react'
import styles from './header.module.scss'

const Add = dynamic(() => import('@mui/icons-material/Add'))
const Remove = dynamic(() => import('@mui/icons-material/Remove'))
const IconButton = dynamic(() => import('@mui/material/IconButton'))

interface Props {
  data: Omit<TProduct, 'previewImageUrls'>
}

export default function DetailText({ data }: Props) {
  const orders = useAppSelector(state => state.order)
  const dispatch = useAppDispatch()

  let initQuantity =
    orders.find(order => order.id === data.id) !== undefined
      ? orders.find(order => order.id === data.id)?.quantity!
      : 1

  const [state, setState] = useState({
    currentQty: initQuantity,
    position: 0
  })

  const newOrder = {
    ...data,
    orderId: `${data?.name}-${data?.price}-${new Date().getTime()}`,
    quantity: state.currentQty
  }

  const handleClick = () => {
    dispatch(addToCart(newOrder))
  }

  const handleIncrement = () => {
    setState({ ...state, currentQty: state.currentQty + 1 })
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
  }
  const handleDecrement = () => {
    state.currentQty >= 2
      ? setState({ ...state, currentQty: state.currentQty - 1 })
      : setState({ ...state, currentQty: 1 })
  }

  const handleScroll = () => {
    setState({ ...state, position: window.scrollY })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [window.scrollY])

  return (
    <div className='flex-[0.45] relative mt-4'>
      <p className='mt-5'>Normal</p>
      <h1 className='text-5xl mt-6 transition-transform'>
        <span
          className={`${state.position > 300 ? '' : styles.animatedTextRight} ${
            chonburi.className
          }`}
        >
          124
        </span>
        <span
          className={`${state.position > 300 ? '' : styles.animatedTextDown} ${
            chonburi.className
          }`}
        >
          {data?.name}
        </span>
      </h1>
      <h1 className='text-5xl mt-6 transition-transform'>
        <span
          className={`${state.position > 300 ? '' : styles.animatedTextUp} ${
            chonburi.className
          }`}
        >
          {data?.name}
        </span>
        <span
          className={`${state.position > 300 ? '' : styles.animatedTextLeft} ${
            chonburi.className
          }`}
        >
          124
        </span>
      </h1>
      <div className='flex my-8'>
        <h1 className='my-auto'>Số lượng:</h1>
        <IconButton onClick={handleDecrement} disableRipple>
          <Remove />
        </IconButton>
        <input
          value={state.currentQty}
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
          state.position > 300 ? '' : styles.expandedButton
        }`}
        onClick={handleClick}
      >
        <Add className='pr-1' />
        Add to cart
      </button>
    </div>
  )
}
