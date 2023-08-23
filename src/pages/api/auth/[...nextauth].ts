import fs from 'fs/promises'
import { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import path from 'path'

const TOKEN_PATH = path.join(process.cwd(), 'token.json')

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
        const payload = JSON.stringify({
          type: 'authorized_user',
          client_id: process.env.GOOGLE_ID,
          client_secret: process.env.GOOGLE_SECRET,
          access_token: account?.access_token!,
          expires_at: account?.expires_at!,
          refresh_token: account?.refresh_token!
        })
        await fs.writeFile(TOKEN_PATH, payload)
      }
      return token
    }
  }
}

export default NextAuth(authOptions)
