import { HttpStatus } from '@/constant'
import { getProducts } from '@/db/product.repository'
import { NextApiHandler } from 'next'
import { kv } from '@vercel/kv'
import { Logger } from '@/util'
import { TProduct } from '@/types'

const handler: NextApiHandler = async (_, res) => {
  try {
    let _products: TProduct[] | null = await kv.get<TProduct[]>(`PRODUCTS`)
    if (_products !== null && _products!?.length > 0) {
      res.status(HttpStatus.OK).json({
        products: _products
      })
    } else {
      const _products = await getProducts()
      await kv.set<typeof _products>(`PRODUCTS`, _products, {
        ex: 300,
        nx: true
      })
      res.status(HttpStatus.OK).json({
        products: _products
      })
    }
  } catch (e) {
    Logger.error(`Set cache with error:`, e)
    res.status(HttpStatus.InternalServerError).json({
      message: `Internal server error`
    })
  }
}

export default handler
