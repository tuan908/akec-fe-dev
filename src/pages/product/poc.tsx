import { wrapper } from '@/app/store'
import productApi from '@/features/product/product.api'
import { Logger } from '@/util'
import { imgUrls } from '@/component/home/carouselV2'
import { LoadingComponent as Loading } from '@/component/shared'

export default function Poc() {
  const { data, isLoading } = productApi.useGetByIdQuery(`0`)
  Logger.info(`Data:`, data)

  return (
    <div className='w-9/10 m-auto'>
      {isLoading && <Loading />}
      <div className='w-1/6 fixed top-20 left-20'>
        {imgUrls.map((url, index) => (
          <div key={index} className=''>
            <img src={url} alt='' />
          </div>
        ))}
      </div>

      <div className='w-3/5 m-auto flex flex-col'>
        {imgUrls.map((url, index) => (
          <div key={index} className=''>
            <img src={url} alt='' />
          </div>
        ))}
      </div>
      <div className='w-1/6 fixed top-20 right-20'>
        {imgUrls.map((url, index) => (
          <div key={index} className=''>
            <img src={url} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    store.dispatch(productApi.endpoints.getById.initiate(`0`))
    await Promise.all(store.dispatch(productApi.util.getRunningQueriesThunk()))

    return { props: {} }
  }
)
