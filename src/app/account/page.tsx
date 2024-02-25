import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/shared/Layout'))

export default function Page() {
  return <div className=''>Account</div>
}
