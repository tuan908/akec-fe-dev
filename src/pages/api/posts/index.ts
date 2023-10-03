import { HttpStatus } from '@/constant'
import postEndpoint, { type TPost } from '@/db/post.repository'
import { Logger } from '@/utils'
import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    let _posts: TPost[] | null = await kv.get<TPost[]>(`POSTS`)
    if (_posts !== null && _posts!?.length > 0) {
      res.status(HttpStatus.OK).json({
        posts: _posts
      })
    } else {
      const _posts = await postEndpoint.getAll()
      await kv.set<typeof _posts>(`POSTS`, _posts, {
        ex: 300,
        nx: true
      })
      res.status(HttpStatus.OK).json({
        posts: _posts
      })
    }
  } catch (e) {
    Logger.error(`Set cache with error:`, e)
    res.status(HttpStatus.InternalServerError).json({
      message: `Internal server error`
    })
  }
}