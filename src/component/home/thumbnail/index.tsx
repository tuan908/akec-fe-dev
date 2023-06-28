export default function HomeThumbnail() {
  return (
    <div className='relative w-full'>
      <img
        src='https://images.unsplash.com/photo-1504860708171-19abd233ec3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        className='opacity-90 object-cover w-full sm:h-[20rem] md:h-[30rem]'
        alt=''
      />

      <div className='absolute top-1/3 left-[5%] text-white font-bold'>
        <h1 className='uppercase text-2xl lg:text-4xl'>Nhãn hàng AKEC</h1>
        <h3 className='lg:text-xl'>Nhãn hàng AKEC, thuộc tập đoàn AKEC</h3>
      </div>
    </div>
  )
}
