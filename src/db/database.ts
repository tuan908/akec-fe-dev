import { createKysely } from '@vercel/postgres-kysely'
import type { PostTable, ProductTable } from './tables'

interface Database {
  product: ProductTable
  post: PostTable
}

export default createKysely<Database>()