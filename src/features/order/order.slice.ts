import type { TOrder } from '@/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { SliceName } from '../feature.constant'
import { HYDRATE_ACTION } from '../hydrate/hydrate.action'

const orderSlice = createSlice({
  name: SliceName.Order,
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
    builder.addCase(HYDRATE_ACTION, (state, action) => [
      ...state,
      ...action.payload.order
    ])
  }
})

export default orderSlice

export const { addToCart, removeFromCart } = orderSlice.actions