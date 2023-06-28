export type TToBoolean<T> = {
  [TKey in keyof T]: boolean
}