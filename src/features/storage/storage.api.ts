import { drive_v3 } from 'googleapis';
import api from 'src/app/base.api';

export type TStorageApiResponse = { ok: boolean; data: drive_v3.Schema$FileList }

const storageApi = api.injectEndpoints({
  endpoints: builder => ({
    listAllFiles: builder.query<drive_v3.Schema$File[], void>({
      query: () => `/storage/getAll`,
      transformResponse: (res: TStorageApiResponse, _meta, _arg) =>
        res.data.files!
    })
  })
})

export default storageApi