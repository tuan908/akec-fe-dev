import type { TOrder } from '@/lib/types'
import dynamic from 'next/dynamic'
import { FC, useState } from 'react'

const Add = dynamic(() => import('@mui/icons-material/Add'))
const Remove = dynamic(() => import('@mui/icons-material/Remove'))
const IconButton = dynamic(() => import('@mui/material/IconButton'))

interface Props {
  item: TOrder
}

const CartQuantity: FC<Props> = ({ item }) => {
  const [qty, setQty] = useState(item.quantity)

  return (
    <div className='flex my-8'>
      <h1 className='my-auto'>Số lượng:</h1>
      <IconButton onClick={() => setQty(qty >= 2 ? qty - 1 : 1)} disableRipple>
        <Remove />
      </IconButton>
      <input
        value={qty}
        type='text'
        className='border-x-2 border-y-2 mx-4 w-[5%] text-center outline-none'
        onChange={e => setQty(Number.parseInt(e.currentTarget.value))}
      />
      <IconButton onClick={() => setQty(qty + 1)} disableRipple>
        <Add />
      </IconButton>
    </div>
  )
}

export default CartQuantity
