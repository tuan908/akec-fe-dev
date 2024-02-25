import Posts from '@/components/About/Posts'
import postApi from '@/features/post/post.api'
import dynamic from 'next/dynamic'
import { type ReactElement } from 'react'

const Layout = dynamic(() => import('@/components/shared/Layout'))
const LoadingComponent = dynamic(() => import('@/components/shared/Loading'))
const PostThumbnail = dynamic(() => import('@/components/About/Thumbnail'))

const Page= () => {
  const { isLoading } = postApi.useGetAllPostsQuery()

  if (isLoading) return <LoadingComponent />

  return (
    <div className="bg-[#F8F0EC]">
      <PostThumbnail />

      <div className='w-4/5 mx-auto grid grid-cols-1'>
        <Posts />
      </div>
    </div>
  )
}

 = (page: ReactElement) => (
  <Layout pageTitle='Về chúng tôi'>{page}</Layout>
)

export default Page