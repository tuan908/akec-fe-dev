import { type TAppState } from '@/app/types'
import { createSlice, prepareAutoBatched } from '@reduxjs/toolkit'
import { HYDRATE_ACTION } from '../../hydrate/hydrate.action'

type TCarouselIndex = {
  value: number
}

const initialState: TCarouselIndex = {
  value: 0
}

const carouselSlice = createSlice({
  initialState,
  name: 'carousel',
  reducers: {
    nextSlide: {
      reducer: state => {
        state.value === 0 ? state.value++ : state
        return state
      },
      prepare: prepareAutoBatched<void>()
    },
    prevSlide: {
      reducer: state => {
        state.value === 1 ? state.value-- : state
        return state
      },
      prepare: prepareAutoBatched<void>()
    }
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE_ACTION, (state, action) => ({
      ...state,
      value: action.payload.carousel.value
    }))
  }
})

export default carouselSlice
export const { nextSlide, prevSlide } = carouselSlice.actions
export const carouselIndexSelector = (state: TAppState) => state.carousel.value
