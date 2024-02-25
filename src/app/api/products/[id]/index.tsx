import { HttpStatus } from '@/constants'
import productEndpoint from '@/lib/database/product.repository'
import type { TProduct } from '@/lib/types'
import { Logger } from '@/lib/utils'
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
