import Image from 'next/image'

export function Thumbnail() {
  return (
    <div className='relative w-full'>
      <Image
        src='/assets/image/background-home.webp'
        className='opacity-90 object-cover w-full sm:h-[20rem] md:h-[30rem]'
        alt=''
        loading='lazy'
        width={400}
        height={400}
      />

      <div className='absolute top-1/3 left-[5%] text-white font-bold'>
        <h1 className='uppercase text-2xl lg:text-4xl'>Nhãn hàng AKEC</h1>
        <h3 className='lg:text-xl'>Nhãn hàng AKEC, thuộc tập đoàn AKEC</h3>
      </div>
    </div>
  )
}
