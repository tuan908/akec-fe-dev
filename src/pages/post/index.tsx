import { useAppDispatch } from '@/app/hooks'
import { wrapper } from '@/app/store'
import postApi from '@/features/post/post.api'
import { clearInput } from '@/features/post/post.slice'
import { type NextPageWithLayout } from '@/types'
import { For } from 'million/react'
import dynamic from 'next/dynamic'
import { useState, type ReactElement } from 'react'

const PlusIcon = dynamic(() => import('@mui/icons-material/Add'))
const IconButton = dynamic(() => import('@mui/material/IconButton'))
const Layout = dynamic(() => import('@/component/shared/layout'))
const PostCreator = dynamic(() => import('@/component/about/create-post'))
const PostCard = dynamic(() => import('@/component/about/PostCard'))
const NextLink = dynamic(() => import('next/link'))
const LoadingComponent = dynamic(() => import('@/component/shared/loading'))
const PostThumbnail = dynamic(() => import('@/component/about/thumbnail'))

const Page: NextPageWithLayout = () => {
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
      <PostThumbnail />
      <div className='w-4/5 mx-auto flex flex-row'>
        <nav className='lg:text-sm lg:leading-6 relative mr-0 my-10 w-1/5'>
          <h5 className='mb-8 lg:mb-3 font-semibold text-dark text-xl'>
            Danh sách bài viết
          </h5>
          <div className='space-y-6 lg:space-y-2 border-l border-slate-100 w-full flex flex-col'>
            <For each={[1, 2, 3, 4, 5]}>
              {number => (
                <NextLink
                  href={`/post/${number}`}
                  key={number}
                  className='px-3 py-4 hover:cursor-pointer hover:text-dark hover:bg-hover hover:rounded-lg'
                >
                  Bài viết {number}
                </NextLink>
              )}
            </For>
          </div>
        </nav>
        <div className='w-3/5'>
          <For each={data!}>
            {post => <PostCard key={post?.id} {...post} />}
          </For>
        </div>
        <div className='w-1/5'></div>
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

Page.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Về chúng tôi'>{page}</Layout>
)

export default Page

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    store.dispatch(postApi.endpoints.getAllPosts.initiate())
    await Promise.allSettled(
      store.dispatch(postApi.util.getRunningQueriesThunk())
    )

    return { props: {} }
  }
)