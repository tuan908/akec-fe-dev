import { Route } from '@/constant'
import dynamic from 'next/dynamic'

const NextLink = dynamic(() => import('next/link'))

export default function NotFound() {
  return (
    <div className='w-full h-full min-h-screen flex justify-center items-center flex-col'>
      <h1 className='text-4xl'>404 Not Found</h1>

      <NextLink
        className='text-2xl border-none outline-none text-blue-500 hover:underline'
        href={Route.Home}
      >
        Back to Home
      </NextLink>
    </div>
  )
}
