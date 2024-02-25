export const convertFileSize = (size: number) => {
  let n = 1024
  let s = ''
  let kb = size / n
  let mb = kb / n
  let gb = mb / n
  let tb = gb / n
  if (size < n) {
    s = size + ' Bytes'
  } else if (size >= n && size < n * n) {
    s = kb.toFixed(2) + ' KB'
  } else if (size >= n * n && size < n * n * n) {
    s = mb.toFixed(2) + ' MB'
  } else if (size >= n * n * n && size < n * n * n * n) {
    s = gb.toFixed(2) + ' GB'
  } else if (size >= n * n * n * n) {
    s = tb.toFixed(2) + ' TB'
  }
  return s
}

export function toBase64(blob: Blob) {
  return new Promise((resolve, _) => {
    let fileReader = new FileReader()
    fileReader.readAsDataURL(blob)
    fileReader.onload = () => resolve(fileReader.result)
  })
}