import type { TAboutPost } from '@/types/about'

export default function AboutPost({ imgUrl, text }: TAboutPost) {
  return (
    <div className='flex my-8'>
      <div className='w-1/4 flex justify-center'>
        <img srcSet={imgUrl} alt='' className='w-[9.5rem] h-[9.5rem]' />
      </div>
      <section className='w-full flex flex-col my-auto'>
        <h1 className='text-3xl'>Title</h1>
        <p className=''>{text}</p>
      </section>
    </div>
  )
}