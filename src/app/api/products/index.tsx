import { HttpStatus } from '@/constants'
import productEndpoint from '@/lib/database/product.repository'
import type { TProduct } from '@/lib/types'
import { Logger } from '@/lib/utils'
import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    let _products: TProduct[] | null = await kv.get<TProduct[]>(`PRODUCTS`)
    if (_products !== null && _products!?.length > 0) {
      res.status(HttpStatus.OK).json({
        products: _products
      })
    } else {
      const _products = await productEndpoint.getAll()
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
