import { ColumnType, Generated } from 'kysely'

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

export type { PostTable, ProductTable }
