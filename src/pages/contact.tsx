import type { ReactElement } from 'react'
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/component/contact/contact-form'))
const Layout = dynamic(() => import('@/component/shared/layout'))
const Grid = dynamic(() => import('@mui/material/Grid'))
const CustomMap = dynamic(() => import('@/component/contact/map'), { ssr: false })

const ContactPage = () => {
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

export default ContactPage

ContactPage.getLayout = (page: ReactElement) => (
  <Layout pageTitle='Liên hệ với chúng tôi'>{page}</Layout>
)
