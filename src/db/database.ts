import { createKysely } from '@vercel/postgres-kysely'
import type { ImageTable, PostTable, ProductTable, TokenTable } from './tables'

interface Database {
  product: ProductTable
  post: PostTable,
  image: ImageTable,
  token: TokenTable
}

export default createKysely<Database>()