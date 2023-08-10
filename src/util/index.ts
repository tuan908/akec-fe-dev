import { ACCESS_TOKEN, REFRESH_TOKEN, Route, USER_INFO } from '@/constant'
import Cookies from 'js-cookie'
import { Chonburi } from 'next/font/google'

export const defaultParams: Record<string, string> = {
  page: '0',
  size: '20',
  sort: 'asc'
}

export function formatMoney(price: string) {
  const formatMoney = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })
  const raw = Number.parseInt(price)
  price = formatMoney.format(raw)
  return price
}

export { Logger } from './logger'

export function parseJson(data: any) {
  return JSON.parse(JSON.stringify(data))
}

export function signOut() {
  Cookies.remove(ACCESS_TOKEN)
  Cookies.remove(REFRESH_TOKEN)
  Cookies.remove(USER_INFO)

  window.location.replace(Route.Home)
}

export function toBase64(blob: Blob) {
  return new Promise((resolve, _) => {
    let fileReader = new FileReader()
    fileReader.readAsDataURL(blob)
    fileReader.onload = () => resolve(fileReader.result)
  })
}

export const chonburi = Chonburi({
  weight: '400',
  preload: true,
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
})

export const currentEnvironment = process.env.NODE_ENV
