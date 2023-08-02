import { HttpStatus } from '@/constant'
import productEndpoint from '@/db/product.repository'
import type { TProduct } from '@/types'
import { Logger } from '@/util'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query?.id

  if (typeof id === 'string') {
    let product: TProduct | undefined = await productEndpoint.getById(
      Number.parseInt(id)
    )
    Logger.debug(`Get product with id ${id}:`, product)
    if (product !== undefined) res.status(HttpStatus.OK).json({ product })
    else
      res
        .status(HttpStatus.NotFound)
        .json({ message: `Not found product with id ${id}` })
  }
}
