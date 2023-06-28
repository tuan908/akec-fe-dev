export const REQUEST_PARAM_SORT_ASC: string = 'asc'
export const REQUEST_PARAM_SORT_DESC: string = 'desc'
export const REQUEST_PARAM_PAGE = 'page'
export const REQUEST_PARAM_SIZE = 'size'
export const REQUEST_PARAM_SORT: string = 'sort'

export const LOGO_ABSOLUTE_PATH = '/assets/image/logo.jpg'

export enum Route {
  Home = '/home',
  Products = '/products',
  Contact = '/contact',
  Cart = '/cart',
  Introduce = '/home',
  Login = '/auth/login',
  About = '/about',
  Account = '/account'
}

export const ACCESS_TOKEN = `access_token`
export const REFRESH_TOKEN = `refresh_token`
export const USER_INFO = `user_info`

export enum LoggerNamespace {
  Trace = 'TRACE',
  Debug = 'DEBUG',
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR',
  Fatal = 'FATAL'
}
