import tokenRepository from '@/db/token.repository'
import { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent select_account',
          scope:
            'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account) {
        const tokenDto = {
          access_token: account?.access_token!,
          expires_at: account?.expires_at!,
          refresh_token: account?.refresh_token!
        }
        await tokenRepository.create(tokenDto)
      }
      return token
    }
  }
}

export default NextAuth(authOptions)