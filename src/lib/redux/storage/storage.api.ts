import {type drive_v3} from "googleapis";
import {baseApi} from "../base.api";

type DriveFile = drive_v3.Schema$File;
export type DriveApiResponse = {
  ok: boolean;
  data: DriveFile[];
};

const storageApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    listAllFiles: builder.query<DriveFile[], void>({
      query: () => `/storage/getAll`,
      transformResponse: (res: DriveApiResponse) => res.data
    })
  })
});

export default storageApi;
