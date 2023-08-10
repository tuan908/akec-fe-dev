import { currentEnvironment } from '@/util'

export const baseApiUrl =
  currentEnvironment === `development` || currentEnvironment === `test`
    ? process.env.DEV_API_ENDPOINT
    : process.env.PROD_API_ENDPOINT