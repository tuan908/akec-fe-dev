import { TAppState } from "@/app/store";
import { createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

/**
 * @see https://github.com/kirill-konshin/next-redux-wrapper/issues/509
   @description !!! MUST INCLUDE in your new slice
 */
export const HYDRATE_ACTION = createAction<TAppState>(HYDRATE)