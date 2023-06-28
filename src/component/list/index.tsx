import BirdNestError from '@/component/error'
import Loading from '@/component/loading'
import type { TProduct } from '@/types'
import Item from './item'

/**
 * 's Virtual List's Props
 */

interface Props {
  data: TProduct[]
  isLoading: boolean
  isError: boolean
}

export default function ItemList({ data, isLoading, isError }: Props) {
  if (isError) return <BirdNestError isError={isError} />
  if (isLoading) return <Loading isLoading={isLoading} />
  return (
    <div className='w-[80%] m-auto pt-10 grid md:grid-cols-2 md:grid-rows-2 md:gap-2 h-full'>
      {data!?.map(item => (
        <Item key={item.id} itemProps={item} />
      ))}
    </div>
  )
}
