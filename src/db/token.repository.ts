import database from './database'

export type TokenDto = {
  access_token: string
  refresh_token: string
  expires_at: number
}

export type UpdateTokenDto = Omit<TokenDto, 'refresh_token'>

const findAccessToken = async () =>
  await database
    .selectFrom(`token`)
    .where(`token.client_id`, `=`, process.env.GOOGLE_ID)
    .select(`token.access_token`)
    .orderBy(`created_at`, `desc`)
    .executeTakeFirst()

const findRefreshToken = async () =>
  await database
    .selectFrom(`token`)
    .where(`token.client_id`, `=`, process.env.GOOGLE_ID)
    .select(`token.refresh_token`)
    .orderBy(`token.updated_at`, `desc`)
    .executeTakeFirst()

const save = async (tokenDto: TokenDto) =>
  await database
    .insertInto(`token`)
    .values({
      ...tokenDto,
      client_id: process.env.GOOGLE_ID,
      client_secret: process.env.GOOGLE_SECRET,
      type: 'authorized_user',
      updated_at: new Date()
    })
    .executeTakeFirst()

const update = async (updateDto: UpdateTokenDto) =>
  await database
    .updateTable(`token`)
    .set({
      ...updateDto,
      updated_at: new Date()
    })
    .executeTakeFirst()

const tokenRepository = {
  save,
  update,
  findAccessToken,
  findRefreshToken
}

export default tokenRepository