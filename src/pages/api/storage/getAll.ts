import { HttpStatus } from '@/constant'
import drive from '@/lib/drive'
import type { NextApiRequest, NextApiResponse } from 'next'
import credentials from '../../../../token.json'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const gapiRes = await drive.files.list({
    access_token: credentials.access_token,
    pageSize: 10,
    fields: `nextPageToken, files(id, name, createdTime, modifiedTime, size)`
  })
  if (gapiRes.status !== HttpStatus.OK) {
    return res.json({ ok: false, data: [] })
  }
  return res.json({ ok: true, data: gapiRes.data.files })
}