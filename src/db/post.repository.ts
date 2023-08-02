import { Logger } from '@/util'
import db from './database'
import { KyselyQueryReturnType } from '@/types'

const getAllQuery = db.selectFrom('post').selectAll()

const getAll = async () => {
  const _resultSet = await getAllQuery.execute()
  Logger.info(`Data:`, _resultSet)
  return _resultSet
}

export type TPost = KyselyQueryReturnType<typeof getAllQuery>

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