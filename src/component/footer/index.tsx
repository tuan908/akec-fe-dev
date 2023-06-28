import Routes from '@/common/Routes'
import { LOGO_ABSOLUTE_PATH } from '@/constant'
import Email from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import NearMeIcon from '@mui/icons-material/NearMe'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  const address = 'An Bình, Phú Giáo, Bình Dương, Vietnam'
  const phone = '+84 37 223 8379'
  const email = 'info@akec.com'
  const facebook_url = 'https://www.facebook.com/AKECsince2021'
  const instagram_url = facebook_url
  const youtube_url = facebook_url
  const location_map = 'https://goo.gl/maps/HLP7uFFt2pRvs6HD8'

  return (
    <footer className='bg-[#00130F] text-white p-4 stick bottom-0 w-full'>
      {/* Logo */}
      <div className='grid grid-cols-9 font-semibold'>
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
              <Link
                className={styles.locationLink}
                href={location_map}
                target={'_blank'}
              >
                (Xem trên bản đồ <NearMeIcon></NearMeIcon>)
              </Link>
            </div>

            {/* Phone */}
            <div className='col-span-1 grid justify-items-center'>
              <LocalPhoneIcon></LocalPhoneIcon>
            </div>
            <div className='col-span-9'>Điện Thoại: {phone}</div>

            {/* Email */}
            <div className='col-span-1 grid justify-items-center'>
              <Email></Email>
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
            <Link href={Routes.CONTACT}>Nội Bộ</Link>
          </div>
        </div>

        {/* QUICK LINK */}
        <div className=''>
          <h2 className='uppercase text-xl mb-6 text-left'>quick link</h2>
          <div className='capitalize'>
            <Link href={Routes.CONTACT}>Giới Thiệu</Link>
          </div>
          <div className='capitalize'>
            <Link href={Routes.CONTACT}>tin tức</Link>
          </div>
          <div className='capitalize'>
            <Link href={Routes.CONTACT}>tuyển dụng</Link>
          </div>
          <div className='capitalize'>
            <Link href={Routes.CONTACT}>liên hệ</Link>
          </div>
        </div>

        {/* KẾT NỐI VỚI AKEC */}
        <div className='col-span-2 justify-items-start'>
          <h2 className='uppercase text-xl mb-6 text-left'>KẾT NỐI VỚI AKEC</h2>
          <div>
            <Link href={facebook_url}>
              <FacebookIcon className={styles.socialIcon}></FacebookIcon>
            </Link>
            <Link href={instagram_url}>
              <InstagramIcon className={styles.socialIcon}></InstagramIcon>
            </Link>
            <Link href={youtube_url}>
              <YouTubeIcon className={styles.socialIcon}></YouTubeIcon>
            </Link>
            <h3>@ 2022 AKEC Group</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
