import { ACCESS_TOKEN, REFRESH_TOKEN, Route, USER_INFO } from '@/constant'
import Cookies from 'js-cookie'

export function signOut() {
  Cookies.remove(ACCESS_TOKEN)
  Cookies.remove(REFRESH_TOKEN)
  Cookies.remove(USER_INFO)

  window.location.replace(Route.Home)
}