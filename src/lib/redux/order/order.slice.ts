import {SliceName} from "@/constants";
import {type OrderDto} from "@/lib/types";
import {type PayloadAction} from "@reduxjs/toolkit";
import {createAppSlice} from "../base.slice";
import {rootReducer} from "../reducer";

const orderSlice = createAppSlice({
  name: SliceName.Order,
  initialState: [] as OrderDto[],
  reducers: {
    addToCart(state, action: PayloadAction<OrderDto>) {
      const itemExisted = state.find(item => item.id === action.payload.id);
      if (itemExisted) {
        itemExisted.quantity = action.payload.quantity;
      } else {
        state.push(action.payload);
      }

      return state;
    },
    removeFromCart: (state, action: PayloadAction<OrderDto>) => {
      const itemExistedIndex = state.findIndex(
        item => item.id === action.payload.id
      );
      state.splice(itemExistedIndex, 1);
    }
  }
});

const withOrder = rootReducer.inject(orderSlice);

export const orderList = withOrder.selector(x => x.order);
export const {addToCart, removeFromCart} = orderSlice.actions;
