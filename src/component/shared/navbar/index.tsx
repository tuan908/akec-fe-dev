import { Route } from '@/constant'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import styles from './navbar.module.scss'

const LogoText = dynamic(() => import('./LogoText'))
const Link = dynamic(() => import('next/link'))
const Sidebar = dynamic(() => import('./Sidebar'))
const CSRNavbarItem = dynamic(() => import('./CSRNavbarItem'), {
  ssr: false
})

export default function Navbar() {
  const router = useRouter()

  return (
    <nav
      className='p-2 w-full sticky top-0 left-0 flex sm:inline-grid sm:grid-cols-5 place-items-center mx-auto shadow-2xl font-medium text-lg text-white bg-[#2c2519]'
      style={{
        gridArea: 'navbar',
        zIndex: '49'
      }}
    >
      <Sidebar />
      <Link
        href={Route.About}
        className={`hidden sm:block cursor-pointer ${
          Route.About === router.pathname ? 'opacity-1' : 'opacity-60'
        }`}
      >
        Tin tức
      </Link>
      <Link
        href={Route.Products}
        className={`hidden sm:block ${styles.productMenu} ${
          router.pathname.includes('product') ? 'opacity-1' : 'opacity-60'
        }`}
      >
        Sản phẩm
        <ul className={`hidden ${styles.submenu}`}>
          <li id={styles.liTest} className='px-4 py-2 w-full relative'>
            Thường
            <ul id={styles.ulTest} className='hidden'>
              <li className='px-4 py-2'>Sản phẩm 1</li>
              <li className='px-4 py-2'>Sản phẩm 1</li>
              <li className='px-4 py-2'>Sản phẩm 1</li>
            </ul>
          </li>
          <li className='px-4 py-2 w-full'>
            <span>Trung bình</span>
            <ul id='submenu-2' className='hidden'>
              <li>Sản phẩm 1</li>
              <li>Sản phẩm 1</li>
            </ul>
          </li>
          <li className='px-8 py-2'>
            Cao cấp
            <ul id='submenu-1' className='hidden'>
              <li>Sản phẩm 1</li>
            </ul>
          </li>
        </ul>
      </Link>
      {/* Change from img => text */}
      <LogoText />
      {/* <Link href={Routes.CART} className='cursor-pointer hover:opacity-100'> */}
      {/* <Badge badgeContent={currentCartItems}>
          <ShoppingCart />
        </Badge> */}
      {/* Giỏ hàng
      </Link> */}
      <Link
        href={Route.Contact}
        className={`hidden sm:block cursor-pointer ${
          Route.Contact === router.pathname ? 'opacity-1' : 'opacity-60'
        }`}
      >
        Liên hệ
      </Link>
      <CSRNavbarItem />
    </nav>
  )
}
