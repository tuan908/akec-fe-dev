import { useAppSelector } from '@/app/hooks'

export default function Preview() {
  const previewImages = useAppSelector(state => state.post.previewImages)

  return (
    <div className='w-5/6 h-5/6 grid grid-cols-4 grid-rows-4 relative text-center z-50 border-2 rounded-lg'>
      {previewImages.map((url, index) => (
        <img
          key={index}
          src={url}
          alt='Preview'
          className='rounded-lg'
          loading='lazy'
        />
      ))}
    </div>
  )
}
