import { TResponse } from '@/types'
import { TLogin, TLoginRequest } from '@/types/auth'
import { api } from './base.api'

export const authApi = api.injectEndpoints({
  endpoints(build) {
    return {
      login: build.mutation<TResponse<TLogin>, TLoginRequest>({
        query(args) {
          return {
            url: 'auth/login',
            body: args,
            method: 'POST'
          }
        }
      })
    }
  }
})
