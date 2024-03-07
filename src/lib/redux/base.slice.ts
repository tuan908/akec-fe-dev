import {asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit";

/**
 * createAppSlice, extended from createSlice
 */
export const createAppSlice = buildCreateSlice({
  creators: {
    asyncThunk: asyncThunkCreator
  }
});
