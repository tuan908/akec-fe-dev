import { SliceName } from '@/constants'
import { createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '../base.slice'
import { rootReducer } from '../reducer'

export const addFileAsync = createAsyncThunk(
  'upload/addFileAsync',
  async (file: File, _) => file
)

export type UploadInfo = {
  ready: boolean
  previewImages: string[]
  _file: File[]
}

const initialState: UploadInfo = {
  ready: false,
  previewImages: [],
  _file: []
}

const postSlice = createAppSlice({
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
  }
})

const withPost = rootReducer.inject(postSlice)

export const postDetails = withPost.selector(x => x.post)
export const { addPreviewImageData, updateImageUploadStatus, clearInput } =
  postSlice.actions
