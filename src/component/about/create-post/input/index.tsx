import { useAppDispatch } from '@/app/hooks'
import {
  addFileAsync,
  addPreviewImageData,
  updateImageUploadStatus
} from '@/features/post/post.slice'
import { toBase64 } from '@/util'
import { type ChangeEventHandler } from 'react'

export default function UploaderInput() {
  const dispatch = useAppDispatch()

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault()
    let _files = e.target.files

    for (const file of _files!) {
      toBase64(file)
        .then(result => {
          dispatch(addPreviewImageData(result as string))
        })
        .catch(err => console.error(err))
      dispatch(addFileAsync(file))
    }
    dispatch(updateImageUploadStatus())
  }

  return (
    <div className='w-5/6 h-5/6 relative'>
      <input
        className='opacity-0 relative top-0 right-0 bottom-0 left-0 w-full h-full z-20'
        type='file'
        accept='image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp'
        aria-hidden='true'
        onChange={handleChange}
        multiple
      />
      <div className='grid place-items-center border-2 rounded-lg absolute w-full h-full top-0'>
        Drag and drop or click here to upload
      </div>
    </div>
  )
}
