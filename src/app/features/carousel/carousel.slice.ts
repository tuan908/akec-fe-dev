import { TAppState } from '@/app/store'
import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE_ACTION } from '../hydrate/hydrateAction'

interface ICarouselIndex {
  value: number
}

const initialState: ICarouselIndex = {
  value: 0
}

export const carouselSlice = createSlice({
  initialState,
  name: 'carousel',
  reducers: {
    nextSlide: state => {
      state.value === 0 ? state.value++ : state
      return state
    },
    prevSlide: state => {
      state.value === 1 ? state.value-- : state
      return state
    }
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE_ACTION, (state, action) => ({
      ...state,
      ...action.payload
    }))
  }
})

export const { nextSlide, prevSlide } = carouselSlice.actions
export const indexSelector = (state: TAppState) => state.carousel.value
