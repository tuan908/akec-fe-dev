import { useAppSelector } from '@/app/hooks'
import { Logger } from '@/util'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { z } from 'zod'

const IconButton = dynamic(() => import('@mui/material/IconButton'))
const CancelIcon = dynamic(() => import('@mui/icons-material/Cancel'))
const UploaderInput = dynamic(() => import('../../About/CreatePost/Input'))
const Preview = dynamic(() => import('./Preview'))

const CreatePostSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1)
})

type CreatePost = z.infer<typeof CreatePostSchema>

export default function PostCreator({
  open,
  setOpen
}: {
  open: boolean
  setOpen: () => void
}) {
  const { _file, ready } = useAppSelector(state => state.post)
  const [formDataText, setText] = useState<CreatePost>({
    title: '',
    content: ''
  })

  function handleCreate() {
    const result = CreatePostSchema.safeParse(formDataText)

    if (!result.success) {
      Logger.error(result.error.format().title)
    }

    const formData = new FormData()

    _file.forEach(file => formData.append('files', file))
    formData.append('title', 'Post1')
    formData.append('authorName', 'tuan.a1.bt@gmail.com')

    // dispatch(postApi.endpoints.create.initiate(formData))
  }

  return open ? (
    <div className='w-screen h-screen top-0 right-0 bot-0 left-0 fixed z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center'>
      <div className='w-3/5 h-5/6 bg-slate-50 m-auto text-black rounded-lg relative'>
        <IconButton onClick={setOpen} className='absolute top-1 right-1'>
          <CancelIcon fontSize='medium' />
        </IconButton>

        <h1 className='text-center my-4 text-3xl'>CREATE YOUR POST</h1>

        <div className='w-11/12 h-5/6 grid grid-cols-2 place-items-center m-auto'>
          {ready ? <Preview /> : <UploaderInput />}

          <div className='w-11/12'>
            <div className='my-4 flex flex-col'>
              <label htmlFor='postTitle' className='my-2'>
                Title
              </label>
              <input
                type='text'
                name='title'
                placeholder='Your post title...'
                className='px-4 py-2 shadow-md rounded-lg border-none outline-none'
                value={formDataText.title}
                onChange={e =>
                  setText({ ...formDataText, [e.target.name]: e.target.value })
                }
              />
              <p className='hidden'>{}</p>
            </div>

            <div className='my-4 flex flex-col'>
              <label htmlFor='postContent' className='my-2'>
                Content
              </label>
              <textarea
                placeholder='Your post content...'
                cols={20}
                rows={10}
                name='content'
                className='px-4 py-2 shadow-md rounded-lg resize-none border-none outline-none'
                value={formDataText.content}
                onChange={e =>
                  setText({ ...formDataText, [e.target.name]: e.target.value })
                }
              />
              <p className='hidden'>{}</p>
            </div>
          </div>
        </div>

        <div className='w-full flex items-center justify-center'>
          <button
            className='w-1/6 m-auto rounded-lg shadow-lg bg-green-600 px-4 py-2'
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}
