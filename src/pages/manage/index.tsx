import { wrapper } from '@/app/store'
import storageApi from '@/features/storage/storage.api'
import { type NextPageWithLayout } from '@/types'
import { Logger, convertFileSize } from '@/util'
import { For } from 'million/react'
import dynamic from 'next/dynamic'

const LoadingComponent = dynamic(() => import('@/components/shared/Loading'))

const Page: NextPageWithLayout = () => {
  const { data, isLoading } = storageApi.useListAllFilesQuery()
  Logger.info(`Drive Api Response:`, data)

  if (isLoading) return <LoadingComponent />

  return (
    <>
      <For each={data!}>
        {file => (
          <ul key={file.id!}>
            <li>Name: {file.name}</li>
            <li>Size: {convertFileSize(Number.parseInt(file.size!))}</li>
            <li>Owned by: Tuanna</li>
          </ul>
        )}
      </For>
    </>
  )
}

export default Page

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    store.dispatch(storageApi.endpoints.listAllFiles.initiate())
    await Promise.allSettled(
      store.dispatch(storageApi.util.getRunningQueriesThunk())
    )

    return { props: {} }
  }
)