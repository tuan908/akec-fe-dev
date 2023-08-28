import { type NextPageWithLayout } from '@/types'
import dynamic from 'next/dynamic'
import { type ReactElement } from 'react'

const ContactForm = dynamic(() => import('@/component/contact/contact-form'))
const Layout = dynamic(() => import('@/component/shared/layout'))
const Grid = dynamic(() => import('@mui/material/Grid'))
const CustomMap = dynamic(() => import('@/component/contact/map'), { ssr: false })

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