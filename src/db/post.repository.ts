import { Logger } from '@/util'
import db from './database'

const getAllQuery = db.selectFrom('post').selectAll()

const getAll = async () => {
  const _resultSet = await getAllQuery.execute()
  Logger.info(`Data:`, _resultSet)
  return _resultSet
}

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
export type TPost = Awaited<ReturnType<typeof getAllQuery.execute>>[number]