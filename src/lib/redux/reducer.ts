import {combineSlices} from "@reduxjs/toolkit";
import {baseApi} from "./base.api";
import {carouselSlice} from "./carousel/carousel.slice";

export interface LazyLoadedSlices {}

export const rootReducer = combineSlices(
  baseApi,
  carouselSlice
).withLazyLoadedSlices<LazyLoadedSlices>();
