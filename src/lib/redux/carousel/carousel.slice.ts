import {createAppSlice} from "@/lib/redux/base.slice";
import {prepareAutoBatched, type PayloadAction} from "@reduxjs/toolkit";

type CarouselIndex = {
  current: number;
  total?: number;
  page: number;
  direction: number;
};

const initialState: CarouselIndex = {
  current: 0,
  page: 0,
  direction: 0
};

export const carouselSlice = createAppSlice({
  initialState,
  name: "carousel",
  reducers: {
    nextSlide: {
      reducer: state => {
        state.current =
          state.current + 1 === state.total ? 0 : state.current + 1;
        state.page = state.current + 1 === state.total ? 0 : (state.page += 1);
        state.direction =
          state.current + 1 === state.total ? 0 : (state.direction += 1);
      },
      prepare: prepareAutoBatched<void>()
    },
    prevSlide: {
      reducer: state => {
        state.current =
          state.current > 0 ? state.current - 1 : state?.total! - 1;
        state.page = state.current > 0 ? state.page - 1 : state?.total! - 1;
        state.direction =
          state.current > 0 ? state.direction - 1 : state?.total! - 1;
      },
      prepare: prepareAutoBatched<void>()
    },

    toSlide(state, action: PayloadAction<number>) {
      state.current = action.payload;
    },

    initTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    }
  },
  selectors: {
    getIndex: x => x
  }
});

export const {nextSlide, prevSlide, toSlide, initTotal} = carouselSlice.actions;
