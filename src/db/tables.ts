import { ColumnType, Generated, GeneratedAlways } from 'kysely'

interface ProductTable {
  id: Generated<number>
  name: string
  preview_image_urls: string[]
  price: number
  created_time: ColumnType<Date, Date, never>
  updated_time: ColumnType<Date, Date, Date>
}

interface PostTable {
  id: Generated<number>
  name: string
  post_txt: string
  image_paths: string[]
  author_id: number
  created_time: ColumnType<Date, Date, never>
  updated_time: ColumnType<Date, Date, Date>
}

interface ImageTable {
  id: Generated<number>
  url: string
  created_time: ColumnType<Date, Date, never>
  updated_time: ColumnType<Date, Date, Date>
}

interface TokenTable {
  id: GeneratedAlways<number>
  type: string
  client_id: string
  client_secret: string
  access_token: string
  refresh_token: string
  expires_at: number
  created_at: ColumnType<Date, Date, never> | null
  update_at: ColumnType<Date, Date, never>
}

export type { ImageTable, PostTable, ProductTable, TokenTable }
