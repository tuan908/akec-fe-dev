import { TAboutPost } from "@/types/about";


export default function AboutPost({ imgUrl, text }: TAboutPost) {
  return (
    <div className='h-96 grid grid-cols-2 grid-rows-1'>
      <div className=''>
        <img
          srcSet={imgUrl}
          alt=''
          className='h-1/2 w-1/2 hover:scale-105 hover:cursor-pointer'
        />
      </div>
      <div className='h-96 overflow-y-visible'>
        <p className=''>{text}</p>
      </div>
    </div>
  )
}
