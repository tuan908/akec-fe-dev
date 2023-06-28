export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BN_SPRING_API: string
    }
  }
}
