import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/shared/Layout'))

const Page = async () => {
  return <div>Page</div>
}

export default Page
