import db from './database'

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