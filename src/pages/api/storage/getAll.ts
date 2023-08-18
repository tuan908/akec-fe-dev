import { HttpStatus } from '@/constant'
import driveService from '@/lib/storage'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) {
  const res = await driveService.files.list({
    pageSize: 10,
    fields: 'nextPageToken, files(id, name, size)'
  })

  if (res.status === HttpStatus.OK) {
    return nextApiResponse.json({
      data: res.data,
      ok: true
    })
  }
  return nextApiResponse.json({
    ok: false
  })
}