import { HttpStatus } from '@/constant'
import { getProducts } from '@/db/product.repository'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (_, res) => {
  const products = await getProducts()

  res.status(HttpStatus.OK).json({
    products
  })
}

export default handler
