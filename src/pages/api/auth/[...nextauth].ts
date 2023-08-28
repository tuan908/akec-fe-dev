import tokenRepository, {
  type TokenDto,
  type UpdateTokenDto
} from '@/db/token.repository'
import { HttpMethod } from '@/features/feature.constant'
import { AuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const GG_TOKEN_URI = 'https://www.googleapis.com/oauth2/v4/token'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent select_account',
          access_type: 'offline',
          response_type: 'code',
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        if (Date.now() < account?.expires_at!) {
          let queryResult = await tokenRepository.findRefreshToken()

          const requestParams: Record<string, string> = {
            client_id: process.env.GOOGLE_ID,
            client_secret: process.env.GOOGLE_SECRET,
            refresh_token: queryResult!.refresh_token,
            grant_type: 'refresh_token' as const
          }

          const gapiResponse = await fetch(GG_TOKEN_URI, {
            method: HttpMethod.POST,
            body: new URLSearchParams(requestParams)
          })

          if (!gapiResponse.ok) throw new Error('Error refreshing token')

          const responseBody =
            (await gapiResponse.json()) as RefreshTokenResponse

          const updateTokenDto: UpdateTokenDto = {
            access_token: responseBody.access_token,
            expires_at: Math.floor(Date.now() / 1000 + responseBody.expires_in)
          }

          await tokenRepository.update(updateTokenDto)

          const resultAkecToken: AkecJWT = {
            ...token,
            ...updateTokenDto,
            access_token: responseBody.access_token,

            refresh_token: queryResult?.refresh_token!
          }

          return resultAkecToken
        }

        let tokenDto: TokenDto = {
          access_token: account?.access_token!,
          expires_at: account?.expires_at!,
          refresh_token: account?.refresh_token!
        }

        await tokenRepository.save(tokenDto)

        const resultAkecToken = {
          ...token,
          ...tokenDto
        }

        return resultAkecToken
      }
      return token
    }
  }
}

export default NextAuth(authOptions)

type RefreshTokenResponse = {
  access_token: string
  expires_in: number
  scope: string
  token_type: string
  id_token: string
}

type AkecJWT = JWT & {
  access_token: string
  refresh_token: string
  expires_at: number
}