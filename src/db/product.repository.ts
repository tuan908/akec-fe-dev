import db from './database'

export const getProducts = async () =>
  await db.selectFrom(`product`).selectAll().execute()

export const getProductById = async (id: number) =>
  await db
    .selectFrom(`product`)
    .selectAll()
    .where('product.id', '=', id)
    .executeTakeFirst()
