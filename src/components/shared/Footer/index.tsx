import { LOGO_ABSOLUTE_PATH, Route } from '@/constants'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import styles from './Footer.module.scss'

const EmailIcon = dynamic(() => import('@mui/icons-material/Email'))
const FacebookIcon = dynamic(() => import('@mui/icons-material/Facebook'))
const InstagramIcon = dynamic(() => import('@mui/icons-material/Instagram'))
const LocalPhoneIcon = dynamic(() => import('@mui/icons-material/LocalPhone'))
const LocationOnIcon = dynamic(() => import('@mui/icons-material/LocationOn'))
const NearMeIcon = dynamic(() => import('@mui/icons-material/NearMe'))
const YouTubeIcon = dynamic(() => import('@mui/icons-material/YouTube'))
const NextLink = dynamic(() => import('next/link'))

const Footer: React.FC = () => {
  return (
    <footer
      className={clsx(
        'text-slate-500 lg:p-4 w-full m-auto',
        styles.gridAreaFooter
      )}
    >
      <ul className='w-4/5 grid grid-cols-2 m-auto p-4 place-items-start md:hidden'>
        <li className='text-lg px-4 py-2'>
          <NextLink href={Route.Post}>Về AKEC</NextLink>
        </li>
        <li className='text-lg px-4 py-2'>
          <NextLink href={Route.Products}>Sản phẩm</NextLink>
        </li>
        <li className='text-lg px-4 py-2'>
          <NextLink href={Route.Cart}>Đơn hàng của tôi</NextLink>
        </li>
        <li className='text-lg px-4 py-2'>
          <NextLink href={Route.Account}>Tài khoản của tôi</NextLink>
        </li>
        <li className='text-lg px-4 py-2'>
          <NextLink href={''}>Chính sách khách hàng</NextLink>
        </li>
        <li className='text-lg px-4 py-2'>
          <NextLink href={Route.Contact}>Liên hệ</NextLink>
        </li>
        <li className='col-span-2 text-center px-4 pt-2 w-full'>
          <h3 className='text-sm'>
            &#169; AKEC.com 2021 - 2023 All Rights Reserved
          </h3>
        </li>
      </ul>

      {/* Logo */}
      <div className='hidden md:grid md:grid-cols-9 md:font-semibold w-4/5 py-16 px-12 m-auto shadow-2xl bg-white text-black rounded-xl'>
        <div className='logo'>
          <a href={facebook_url} className='flex items-center'>
            <img
              src={LOGO_ABSOLUTE_PATH}
              className='h-40 mr-3'
              alt='AKEC Logo'
            />
          </a>
        </div>
        <div className='col-span-4 w-full'>
          <div className='grid grid-cols-10'>
            {/* Tập Đoàn AKEC */}
            <div className='col-span-1'></div>
            <h2 className='col-span-9 uppercase text-xl mb-6 text-left'>
              tập đoàn akec
            </h2>

            {/* Địa Chỉ */}
            <div className='col-span-1 grid justify-items-center'>
              <LocationOnIcon></LocationOnIcon>
            </div>
            <div className='col-span-9'>
              Địa chỉ: {address}{' '}
              <NextLink
                className={styles.locationLink}
                href={location_map}
                target={'_blank'}
              >
                (Xem trên bản đồ <NearMeIcon></NearMeIcon>)
              </NextLink>
            </div>

            {/* Phone */}
            <div className='col-span-1 grid justify-items-center'>
              <LocalPhoneIcon></LocalPhoneIcon>
            </div>
            <div className='col-span-9'>Điện Thoại: {phone}</div>

            {/* Email */}
            <div className='col-span-1 grid justify-items-center'>
              <EmailIcon></EmailIcon>
            </div>
            <div className='col-span-9'>Email: {email}</div>

            <div className='col-span-1'></div>
            <div className='col-span-9'></div>
          </div>
        </div>

        {/* HỖ TRỢ */}
        <div className=''>
          <h2 className='uppercase text-xl mb-6 text-left'>hỗ trợ</h2>
          <div className='capitalize'>
            <NextLink href={Route.Contact}>Nội Bộ</NextLink>
          </div>
        </div>

        {/* QUICK LINK */}
        <div className=''>
          <h2 className='uppercase text-xl mb-6 text-left'>quick link</h2>
          <div className='capitalize'>
            <NextLink href={Route.Contact}>Giới Thiệu</NextLink>
          </div>
          <div className='capitalize'>
            <NextLink href={Route.Contact}>tin tức</NextLink>
          </div>
          <div className='capitalize'>
            <NextLink href={Route.Contact}>tuyển dụng</NextLink>
          </div>
          <div className='capitalize'>
            <NextLink href={Route.Contact}>liên hệ</NextLink>
          </div>
        </div>

        {/* KẾT NỐI VỚI AKEC */}
        <div className='col-span-2 justify-items-start'>
          <h2 className='uppercase text-xl mb-6 text-left'>KẾT NỐI VỚI AKEC</h2>
          <div>
            <NextLink href={facebook_url}>
              <FacebookIcon className={styles.socialIcon}></FacebookIcon>
            </NextLink>
            <NextLink href={instagram_url}>
              <InstagramIcon className={styles.socialIcon}></InstagramIcon>
            </NextLink>
            <NextLink href={youtube_url}>
              <YouTubeIcon className={styles.socialIcon}></YouTubeIcon>
            </NextLink>
            <h3>@ 2022 AKEC Group</h3>
          </div>
        </div>
      </div>
      <div className='h-16 w-full' />
    </footer>
  )
}
export default Footer

const address = 'An Bình, Phú Giáo, Bình Dương, Vietnam'
const phone = '+84 37 223 8379'
const email = 'info@akec.com'
const facebook_url = 'https://www.facebook.com/AKECsince2021'
const instagram_url = facebook_url
const youtube_url = facebook_url
const location_map = 'https://goo.gl/maps/HLP7uFFt2pRvs6HD8'
