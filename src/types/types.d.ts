import '@total-typescript/ts-reset'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BN_SPRING_API: string
      NEXT_PUBLIC_NODEJS_API_ENDPOINT: string
      KV_REST_API_URL: string
      KV_REST_API_TOKEN: string
      KV_REST_API_READ_ONLY_TOKEN: string
    }
  }
}

declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.webp'

export { }