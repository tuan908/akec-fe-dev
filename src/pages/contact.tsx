import { type NextPageWithLayout } from '@/types'
import dynamic from 'next/dynamic'
import { type ReactElement } from 'react'

const ContactForm = dynamic(() => import('@/components/Contact/Form'))
const Layout = dynamic(() => import('@/components/shared/Layout'))
const Grid = dynamic(() => import('@mui/material/Grid'))
const CustomMap = dynamic(() => import('@/components/Contact/GoogleMap'), { ssr: false })

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Grid container spacing={3} className='contactMainForm'>
        <Grid item xs={12} sm={6}>
          <CustomMap />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  )
}

export default Page

Page.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Liên hệ với chúng tôi'>{page}</Layout>
)