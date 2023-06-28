export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BN_SPRING_API: string
      NEXT_PUBLIC_NODEJS_API: string
    }
  }
}
