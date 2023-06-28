import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { TOrder } from '@/types'
import { HYDRATE_ACTION } from '../hydrate/hydrate.action'
import { SliceName } from '../feature.constant'

const productSlice = createSlice({
  name: SliceName.Product,
  initialState: [] as TOrder[],
  reducers: {
    addToCart(state, action: PayloadAction<TOrder>) {
      const itemExisted = state.find(item => item.id === action.payload.id)
      if (itemExisted) {
        itemExisted.quantity = action.payload.quantity
      } else {
        state.push(action.payload)
      }

      return state
    },
    removeFromCart: (state, action: PayloadAction<TOrder>) => {
      const itemExistedIndex = state.findIndex(
        item => item.id === action.payload.id
      )
      state.splice(itemExistedIndex, 1)
    }
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE_ACTION, (state, action) => ({
      ...state,
      ...action.payload
    }))
  }
})

export default productSlice

export const { addToCart, removeFromCart } = productSlice.actions
