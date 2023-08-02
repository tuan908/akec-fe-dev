import { createKysely } from '@vercel/postgres-kysely'
import type { ImageTable, PostTable, ProductTable } from './tables'

interface Database {
  product: ProductTable
  post: PostTable,
  image: ImageTable
}

export default createKysely<Database>()