import { HttpStatus } from '@/constant'
import imageEndpoint, { type TImage } from '@/db/image.repository'
import { Logger } from '@/util'
import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

type TImageEndpointResponse = {
  images: TImage[]
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    let _images: TImage[] = (await kv.get<TImage[]>(`IMAGES`)) ?? []

    if (_images!?.length > 0) {
      const body = {
        images: _images
      }
      res.status(HttpStatus.OK).json(body)
    } else {
      const _images = (await imageEndpoint.getAll()) ?? []
      await kv.set<typeof _images>(`IMAGES`, _images, {
        ex: 300,
        nx: true
      })
      const body: TImageEndpointResponse = { images: _images }
      res.status(HttpStatus.OK).json(body)
    }
  } catch (e) {
    Logger.error(`Set cache with error:`, e)
    res.status(HttpStatus.InternalServerError).json({
      message: `Internal server error`
    })
  }
}
