const fs = require('fs')
const readline = require('readline')

async function generate() {
  const outFile = fs.createWriteStream('img.migration.sql')
  const readlineInterface = readline.createInterface({
    input: fs.createReadStream('img.migration.txt'),
    crlfDelay: Infinity
  })
  let index = 0
  for await (const line of readlineInterface) {
    outFile.write(
      `INSERT INTO public.image(id, url, created_at, updated_at) VALUES (${index}, '${line}', NOW(), NOW());\n`
    )
    index++
  }
}

generate()
