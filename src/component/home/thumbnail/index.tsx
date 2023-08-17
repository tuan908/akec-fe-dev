export default function HomeThumbnail() {
  return (
    <div className='relative w-full'>
      <img
        src='/assets/image/background-home.webp'
        className='opacity-90 object-cover w-full sm:h-[20rem] md:h-[30rem]'
        alt=''
        loading='lazy'
      />

      <div className='absolute top-1/3 left-[5%] text-white font-bold'>
        <h1 className='uppercase text-2xl lg:text-4xl'>Nhãn hàng AKEC</h1>
        <h3 className='lg:text-xl'>Nhãn hàng AKEC, thuộc tập đoàn AKEC</h3>
      </div>
    </div>
  )
}
