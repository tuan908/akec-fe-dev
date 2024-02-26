import {database} from "./database";

/**
 * Token Repository
 * @author tuanna
 */
export class TokenRepository {
  static async findAccessToken() {
    const result = await database
      .selectFrom(`token`)
      .where(`token.client_id`, `=`, process.env.GOOGLE_ID)
      .select(`token.access_token`)
      .orderBy(`created_at`, `desc`)
      .executeTakeFirst();

    return result;
  }

  static async findRefreshToken() {
    const result = await database
      .selectFrom(`token`)
      .where(`token.client_id`, `=`, process.env.GOOGLE_ID)
      .select(`token.refresh_token`)
      .orderBy(`token.updated_at`, `desc`)
      .executeTakeFirst();

    return result;
  }

  static async save(tokenDto: TokenDto) {
    await database
      .insertInto(`token`)
      .values({
        ...tokenDto,
        client_id: process.env.GOOGLE_ID,
        client_secret: process.env.GOOGLE_SECRET,
        type: "authorized_user",
        updated_at: new Date()
      })
      .executeTakeFirst();
  }

  static async update(updateDto: UpdateTokenDto) {
    await database
      .updateTable(`token`)
      .set({
        ...updateDto,
        updated_at: new Date()
      })
      .executeTakeFirst();
  }
}

export type TokenDto = {
  access_token: string;
  refresh_token: string;
  expires_at: number;
};

export type UpdateTokenDto = Omit<TokenDto, "refresh_token">;
