import db from './database'

const getAllQuery = db.selectFrom(`product`).selectAll()
const getAll = async () => await db.selectFrom(`product`).selectAll().execute()

const getById = async (id: number) =>
  await db
    .selectFrom(`product`)
    .selectAll()
    .where('product.id', '=', id)
    .executeTakeFirst()

const productEndpoint = {
  getAll,
  getById
}
export default productEndpoint

export type TProduct = Awaited<ReturnType<typeof getAllQuery['execute']>>[number]