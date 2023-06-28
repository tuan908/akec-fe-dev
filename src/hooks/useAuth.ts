import { ACCESS_TOKEN } from '@/constant'
import Cookies from 'js-cookie'
import { useMemo } from 'react'

export function useAuth() {
  const isAuth = useMemo(
    () => Cookies.get(ACCESS_TOKEN) !== undefined,
    [Cookies.get(ACCESS_TOKEN)]
  )

  return {
    isAuth
  }
}
