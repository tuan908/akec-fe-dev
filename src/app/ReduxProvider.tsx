import { makeStore, type TAppState } from '@/redux'
import { useRef, type ReactNode } from 'react'
import { Provider } from 'react-redux'

export default function ReduxProvider({
  children
}: Readonly<{ children: ReactNode }>) {
  const storeRef = useRef<TAppState>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
