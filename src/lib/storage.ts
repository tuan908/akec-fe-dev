import { authenticate } from '@google-cloud/local-auth'
import { google } from 'googleapis'
import path from 'path'

const keyfilePath = path.join(process.cwd(), `oauth2.keys.json`)

const auth = await authenticate({
  keyfilePath,
  scopes: `https://www.googleapis.com/auth/drive`
})

google.options({
  auth
})

const driveService = google.drive('v3')

export default driveService