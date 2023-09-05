import { type TAppState } from '@/app/types'
import {
  PayloadAction,
  createSlice,
  prepareAutoBatched
} from '@reduxjs/toolkit'
import { HYDRATE_ACTION } from '../../hydrate/hydrate.action'

type TCarouselIndex = {
  current: number
  total?: number
}

const initialState: TCarouselIndex = {
  current: 0
}

const carouselSlice = createSlice({
  initialState,
  name: 'carousel',
  reducers: {
    nextSlide: {
      reducer: state => {
        state.current =
          state.current + 1 === state.total ? 0 : state.current + 1
        return state
      },
      prepare: prepareAutoBatched<void>()
    },
    prevSlide: {
      reducer: state => {
        state.current =
          state.current > 0 ? state.current - 1 : state?.total! - 1
        return state
      },
      prepare: prepareAutoBatched<void>()
    },

    toSlide(state, action: PayloadAction<number>) {
      state.current = action.payload
      return state
    },

    initTotal(state, action: PayloadAction<number>) {
      state.total = action.payload
      return state
    }
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE_ACTION, (state, action) => ({
      ...state,
      current: action.payload.carousel.current
    }))
  }
})

export default carouselSlice
export const { nextSlide, prevSlide, toSlide, initTotal } =
  carouselSlice.actions
export const carouselIndexSelector = (state: TAppState) =>
  state.carousel.current