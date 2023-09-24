import { wrapper } from '@/app/store'
import Post from '@/components/About/Post'
import postApi from '@/features/post/post.api'
import { type NextPageWithLayout } from '@/types'
import dynamic from 'next/dynamic'
import { type ReactElement } from 'react'

const Layout = dynamic(() => import('@/components/shared/Layout'))
const LoadingComponent = dynamic(() => import('@/components/shared/Loading'))
const PostThumbnail = dynamic(() => import('@/components/About/Thumbnail'))

const Page: NextPageWithLayout = () => {
  const { isLoading } = postApi.useGetAllPostsQuery()

  if (isLoading) return <LoadingComponent />

  return (
    <>
      <PostThumbnail />
      <div className='w-4/5 mx-auto flex flex-col'>
        {/* <nav className='lg:text-sm lg:leading-6 relative mr-0 my-10 w-1/5'>
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
        <div className='w-1/5'></div> */}
        <Post imagePosition='left' />
        <Post imagePosition ='right' />
      </div>
      {/* {!open && (
        <IconButton
          className='fixed bottom-8 right-8 z-50'
          onClick={() => setOpen(!open)}
        >
          <PlusIcon />
        </IconButton>
      )}
      <PostCreator open={open} setOpen={handleCreate} /> */}
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