import { type TAppState } from '@/app/types'
import {
  createSlice,
  prepareAutoBatched,
  type PayloadAction
} from '@reduxjs/toolkit'
import { HYDRATE_ACTION } from '../../hydrate/hydrate.action'

type TCarouselIndex = {
  current: number
  total?: number
  page: number
  direction: number
}

const initialState: TCarouselIndex = {
  current: 0,
  page: 0,
  direction: 0
}

const carouselSlice = createSlice({
  initialState,
  name: 'carousel',
  reducers: {
    nextSlide: {
      reducer: state => {
        state.current =
          state.current + 1 === state.total ? 0 : state.current + 1
        state.page = state.current + 1 === state.total ? 0 : (state.page += 1)
        state.direction =
          state.current + 1 === state.total ? 0 : (state.direction += 1)
      },
      prepare: prepareAutoBatched<void>()
    },
    prevSlide: {
      reducer: state => {
        state.current =
          state.current > 0 ? state.current - 1 : state?.total! - 1
        state.page = state.current > 0 ? state.page - 1 : state?.total! - 1
        state.direction =
          state.current > 0 ? state.direction - 1 : state?.total! - 1
      },
      prepare: prepareAutoBatched<void>()
    },

    toSlide(state, action: PayloadAction<number>) {
      state.current = action.payload
    },

    initTotal(state, action: PayloadAction<number>) {
      state.total = action.payload
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
