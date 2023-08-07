import type { TPost } from '@/db/post.repository'

export default function AboutPost({ name, post_txt }: TPost) {
  return (
    <div className='flex my-8 w-full flex-col'>
      <section className=''>
        <h1 className='text-3xl'>{name}</h1>
        {post_txt.split(`.`).map((txt, index) => (
          <p key={index}>{txt + `.`}</p>
        ))}
      </section>
    </div>
  )
}
