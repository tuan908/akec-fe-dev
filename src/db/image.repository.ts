import db from './database'

const queryAll = db.selectFrom(`image`).selectAll()

async function getAll() {
  return await queryAll.execute()
}

const imageEndpoint = {
  getAll
}

export default imageEndpoint

export type TImage = Awaited<typeof queryAll.execute>