import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { removeFromCart } from '@/features/product/product.slice'
import type { TOrder } from '@/types'
import { formatMoney } from '@/util'
import dynamic from 'next/dynamic'

import Link from 'next/link'
import { ReactElement, useState } from 'react'

const CartComponent = dynamic(() => import('@/component/cart'))
const Layout = dynamic(() => import('@/component/shared/layout'))
const Check = dynamic(() => import('@mui/icons-material/Check'))
const Clear = dynamic(() => import('@mui/icons-material/Clear'))
const Box = dynamic(() => import('@mui/material/Box'))
const Button = dynamic(() => import('@mui/material/Button'))
const Modal = dynamic(() => import('@mui/material/Modal'))
const Typography = dynamic(() => import('@mui/material/Typography'))

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const CartPage = () => {
  const data = useAppSelector(state => state.product)
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDelete = (item: TOrder) => {
    dispatch(removeFromCart(item))
    handleClose()
  }

  const handleOrder = () => {}

  return (
    <div className='flex flex-col m-auto p-20'>
      <h1 className='text-center pb-10 text-3xl'>Giỏ hàng:</h1>
      {data.length > 0 &&
        data?.map(item => (
          <div
            className='flex flex-row flex-1 w-[70%] mx-auto my-2 border-x-2 border-y-2 h-[50%]'
            key={item.id}
          >
            <div className='flex flex-[0.29]'>
              <img
                src={
                  'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg'
                }
                className='object-cover w-[240px] h-[240px] p-4'
                loading='lazy'
              />
            </div>
            <div className='flex flex-col flex-[0.7] my-4'>
              <h1 className='text-2xl mb-8'>{item.name}</h1>
              <h1 className='mb-4 text-xl'>
                {formatMoney(item.price.toString())}
              </h1>
              <CartComponent item={item} />
            </div>
            <Clear
              color='error'
              className='cursor-pointer'
              onClick={handleOpen}
            />
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <Typography variant='h6'>
                  Bạn có muốn xoá mặt hàng này khỏi giỏ hàng ?
                </Typography>
                <Button
                  variant='outlined'
                  color='error'
                  startIcon={<Check color='error' />}
                  onClick={() => handleDelete(item)}
                >
                  Yes
                </Button>
                <Button
                  variant='outlined'
                  color='success'
                  startIcon={<Clear color='success' />}
                  onClick={handleClose}
                  disableRipple
                >
                  No
                </Button>
              </Box>
            </Modal>
          </div>
        ))}
      <h1 className='text-right w-[80%] my-4 text-xl'></h1>
      <div className='flex w-[80%] justify-end'>
        {data.length > 0 ? (
          <Button
            variant='outlined'
            className=''
            disableRipple
            onClick={handleOrder}
          >
            Đặt hàng
          </Button>
        ) : (
          <h1>
            Giỏ hàng trống, <Link href='/product/list'>tiếp tục mua sắm</Link>
          </h1>
        )}
      </div>
    </div>
  )
}

export default CartPage

CartPage.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Giỏ hàng'>{page}</Layout>
)
