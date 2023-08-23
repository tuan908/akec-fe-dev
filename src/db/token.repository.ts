import database from './database'

export type TokenDto = {
  access_token: string
  refresh_token: string
  expires_at: number
}

const getAccessToken = async () =>
  await database
    .selectFrom(`token`)
    .where(`token.client_id`, `=`, process.env.GOOGLE_ID)
    .select(`token.access_token`)
    .executeTakeFirst()

const create = async (tokenDto: TokenDto) =>
  await database
    .insertInto(`token`)
    .values({
      ...tokenDto,
      client_id: process.env.GOOGLE_ID,
      client_secret: process.env.GOOGLE_SECRET,
      type: 'authorized_user'
    })
    .executeTakeFirst()

const tokenRepository = {
  create,
  getAccessToken
}

export default tokenRepository
