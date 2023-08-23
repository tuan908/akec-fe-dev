import { drive_v3 } from 'googleapis'
import api from 'src/app/base.api'

export type TStorageApiResponse = { ok: boolean; data: drive_v3.Schema$File[] }

const storageApi = api.injectEndpoints({
  endpoints: builder => ({
    listAllFiles: builder.query<drive_v3.Schema$File[], void>({
      query: () => `/storage/getAll`,
      transformResponse: (res: TStorageApiResponse, _meta, _arg) => res.data
    })
  })
})

export default storageApi
