import storageApi from '@/features/storage/storage.api'
import { Logger, convertFileSize } from '@/lib/utils'
import dynamic from 'next/dynamic'

const LoadingComponent = dynamic(() => import('@/components/shared/Loading'))

const Page = async () => {
  const { data, isLoading } = storageApi.useListAllFilesQuery()
  Logger.info(`Drive Api Response:`, data)

  if (isLoading) return <LoadingComponent />

  return (
    <>
      {data?.map(file => (
        <ul key={file.id!}>
          <li>Name: {file.name}</li>
          <li>Size: {convertFileSize(Number.parseInt(file.size!))}</li>
          <li>Owned by: Tuanna</li>
        </ul>
      ))}
    </>
  )
}

export default Page
