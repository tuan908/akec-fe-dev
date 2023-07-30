import { useAppDispatch } from '@/app/hooks'
import { wrapper } from '@/app/store'
import { LoadingComponent } from '@/component'
import postApi from '@/features/post/post.api'
import { clearInput } from '@/features/post/post.slice'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ReactElement, useState } from 'react'

const PlusIcon = dynamic(() => import('@mui/icons-material/Add'))
const IconButton = dynamic(() => import('@mui/material/IconButton'))
const Layout = dynamic(() => import('@/component/shared/layout'))
const PostCreator = dynamic(() => import('@/component/about/create-post'))
const PostCard = dynamic(() => import('@/component/about/postcard'))

export default function About() {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { data, isLoading } = postApi.useGetAllPostsQuery()

  if (isLoading) return <LoadingComponent />

  function handleCreate() {
    setOpen(false)
    dispatch(clearInput())
  }

  return (
    <>
      <div className='w-full mx-auto grid grid-cols-3 place-items-center'>
        <nav className='lg:text-sm lg:leading-6 relative'>
          <h5 className='mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200'>
            Danh sách bài viết
          </h5>
          <ul className='space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800'>
            <li>
              <Link
                href='/'
                className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              >
                Bài viết 1
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              >
                Bài viết 1
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              >
                Bài viết 1
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              >
                Bài viết 1
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              >
                Bài viết 1
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              >
                Bài viết 1
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              >
                Bài viết 1
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              >
                Bài viết 1
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              >
                Bài viết 1
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              >
                Bài viết 1
              </Link>
            </li>
          </ul>
        </nav>
        {data!?.map(post => (
          <PostCard key={post?.id} {...post} />
        ))}
      </div>
      {!open && (
        <IconButton
          className='fixed bottom-8 right-8 z-50'
          onClick={() => setOpen(!open)}
        >
          <PlusIcon />
        </IconButton>
      )}
      <PostCreator open={open} setOpen={handleCreate} />
    </>
  )
}

About.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Về chúng tôi'>{page}</Layout>
)

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    store.dispatch(postApi.endpoints.getAllPosts.initiate())
    await Promise.all(store.dispatch(postApi.util.getRunningQueriesThunk()))

    return { props: {} }
  }
)
