import type { TPost } from '@/db/post.repository'

export default function AboutPost({ name, post_txt }: TPost) {
  return (
    <div className='flex my-8'>
      <div className='w-1/4 flex justify-center'>
        <img srcSet='' alt='' className='w-[9.5rem] h-[9.5rem]' />
      </div>
      <section className='w-full flex flex-col my-auto'>
        <h1 className='text-3xl'>{name}</h1>
        <p className=''>{post_txt}</p>
      </section>
    </div>
  )
}