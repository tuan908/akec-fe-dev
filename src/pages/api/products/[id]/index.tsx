import { HttpStatus } from '@/constant'
import { getProductById } from '@/db/product.repository'
import { TProduct } from '@/types'
import { Logger } from '@/util'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const id = req.query?.id

  if (typeof id === 'string') {
    let product: TProduct | undefined = await getProductById(
      Number.parseInt(id)
    )
    Logger.debug(`Get product with id ${id}:`, product)
    if (product !== undefined) res.status(HttpStatus.OK).json({product})
    else
      res
        .status(HttpStatus.NotFound)
        .json({ message: `Not found product with id ${id}` })
  }
}

export default handler
