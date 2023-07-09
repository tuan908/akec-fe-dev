import { useAppDispatch } from '@/app/hooks'
import { wrapper } from '@/app/store'
import postApi from '@/features/post/post.api'
import { clearInput } from '@/features/post/post.slice'
import type { TAboutPost } from '@/types/about'
import { defaultParams } from '@/util'
import dynamic from 'next/dynamic'
import { ReactElement, useState } from 'react'

const PlusIcon = dynamic(() => import('@mui/icons-material/Add'))
const IconButton = dynamic(() => import('@mui/material/IconButton'))
const Layout = dynamic(() => import('@/component/shared/layout'))
const PostCreator = dynamic(() => import('@/component/about/create-post'))
const PostCard = dynamic(() => import('@/component/about/postcard'))

const posts: TAboutPost[] = [
  {
    id: 1,
    imgUrl: 'https://pbs.twimg.com/media/FhcJwmqUoAAJR1J?format=jpg&name=small',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`
  }
]

export default function About() {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  function handleCreate() {
    setOpen(false)
    dispatch(clearInput())
  }

  return (
    <>
      <div className='w-4/5 mx-auto grid grid-cols-1 place-items-center'>
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
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
    store.dispatch(postApi.endpoints.getAllPosts.initiate(defaultParams))
    await Promise.all(store.dispatch(postApi.util.getRunningQueriesThunk()))

    return { props: {} }
  }
)
