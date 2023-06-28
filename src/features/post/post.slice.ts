import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE_ACTION } from '../hydrate/hydrate.action'
import { SliceName } from '../feature.constant'

export const addFileAsync = createAsyncThunk(
  'upload/addFileAsync',
  async (file: File, _) => file
)

export type TUpload = {
  ready: boolean
  previewImages: string[]
  _file: File[]
}

const initialState: TUpload = {
  ready: false,
  previewImages: [],
  _file: []
}

const postSlice = createSlice({
  initialState,
  name: SliceName.Post,
  reducers: {
    addPreviewImageData(state, action: PayloadAction<string>) {
      state.previewImages.push(action.payload)
    },

    updateImageUploadStatus(state) {
      state.ready = !state.ready
    },

    clearInput(state) {
      state.previewImages = []
      state.ready = false
      state._file = []
    }
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE_ACTION, (state, action) => ({
      ...state,
      ...action.payload
    }))
    builder.addCase(addFileAsync.fulfilled, (state, action) => {
      state._file.push(action.payload)
    })
  }
})

export default postSlice

export const { addPreviewImageData, updateImageUploadStatus, clearInput } =
  postSlice.actions
