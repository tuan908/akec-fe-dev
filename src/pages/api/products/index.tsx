import { HttpStatus } from '@/constant'
import productEndpoint from '@/db/product.repository'
import type { NextApiRequest, NextApiResponse } from 'next'
import { kv } from '@vercel/kv'
import { Logger } from '@/util'
import type { TProduct } from '@/types'

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
