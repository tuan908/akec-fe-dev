import { Roboto } from 'next/font/google'

type Props = {}

const roboto = Roboto({
  weight: '400',
  subsets: ['cyrillic']
})

export default function ProductDemo(props: Props) {
  return (
    <>
      <div
        className='w-full h-[700px] flex m-auto flex-col'
        style={{
          background: `linear-gradient(180deg, rgba(247,246,225,1) 38%, rgba(233,223,246,1) 100%)`
        }}
      >
        <div className={`mt-12 ${roboto.className}`}>
          <h3 className='font-bold text-3xl text-center'>
            Few of our &quot;secret&quot; recipes
          </h3>
          <h5 className='text-center font-thin mt-2 mb-6 opacity-95'>
            If God had intended us to follow recipes. He wouldn&apos;t have
            given us grandmothers.
          </h5>
        </div>

        <div className='flex w-3/5 mx-auto'>
          <div className='w-1/2 flex items-center justify-center translate-x-20'>
            <img src='/assets/image/productAsset1.png' alt='' />
          </div>
          <div className='w-1/2 bg-[#F48A31] text-white p-20'>
            <section className='w-3/4 m-auto'>
              <h5 className='font-bold text-sm'>FEATURED RECIPE</h5>
              <h2 className='text-3xl my-4'>
                Enjoy the best <i>crab with wine and lemon juice</i>
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid, dolorum. Quod corrupti ratione iusto tenetur possimus.
                Ab dignissimos accusamus ducimus mollitia aspernatur maiores
                illum nesciunt delectus, nemo consequatur voluptate voluptates.
              </p>
            </section>
          </div>
        </div>
      </div>

      <div
        className='w-full h-[600px] flex m-auto'
        style={{
          background: `linear-gradient(180deg, rgba(247,246,225,1) 38%, rgba(233,223,246,1) 100%)`
        }}
      >
        <div className='flex w-3/5 m-auto'>
          <div className='w-1/2 bg-[#F48A31] text-white p-20'>
            <section className='w-3/4 m-auto'>
              <h5 className='font-bold text-sm'>FEATURED RECIPE</h5>
              <h2 className='text-3xl my-4'>
                Enjoy the best <i>crab with wine and lemon juice</i>
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid, dolorum. Quod corrupti ratione iusto tenetur possimus.
                Ab dignissimos accusamus ducimus mollitia aspernatur maiores
                illum nesciunt delectus, nemo consequatur voluptate voluptates.
              </p>
            </section>
          </div>
          <div className='w-1/2 flex items-center justify-center -translate-x-20'>
            <img src='/assets/image/productAsset2.png' alt='' />
          </div>
        </div>
      </div>
    </>
  )
}
