import { Logger } from '@/util'
import { SelectQueryBuilder } from 'kysely'
import db from './database'

const getAllQuery = db.selectFrom('post').selectAll()

const getAll = async () => {
  const _resultSet = await getAllQuery.execute()
  Logger.info(`Data:`, _resultSet)
  return _resultSet
}

export type TPost = ResultSet<typeof getAllQuery>

export const getById = async (id: number) =>
  await db
    .selectFrom(`post`)
    .selectAll()
    .where('post.id', '=', id)
    .executeTakeFirst()

const postEndpoint = {
  getAll,
  getById
}

export default postEndpoint

type ResultSet<
  // 👇 Add a large type constraint
  KyselyQuery extends SelectQueryBuilder<
    Record<string, unknown>,
    string,
    unknown
  >
> =
  // 👇 Remove the Promise wrapper
  Awaited<
    // 👇 Get the return type of the execute method
    ReturnType<KyselyQuery['execute']>
    // 👇 Unpack the array
  >[number]
