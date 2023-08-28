import { useAppSelector } from '@/app/hooks'
import { Route } from '@/constant'
import { useAuth } from '@/hooks'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import styles from './navbar.module.scss'

const Link = dynamic(() => import('next/link'))
const Sidebar = dynamic(() => import('./Sidebar'))
const CSRNavbarItem = dynamic(() => import('./CSRNavbarItem'))
const Logo = dynamic(() => import('./Logo'), { ssr: false })

export default function Navbar() {
  const router = useRouter()
  const ordersCount = useAppSelector(state => state.order).length
  const authProps = useAuth()

  return (
    <nav
      className='p-2 w-full sticky top-0 left-0 flex sm:inline-grid sm:grid-cols-5 place-items-center mx-auto shadow-2xl font-medium text-lg text-white bg-[#2c2519]'
      style={{
        gridArea: 'navbar',
        zIndex: '49'
      }}
    >
      <Sidebar {...authProps}/>
      <Link
        href={Route.Post}
        className={`hidden sm:block cursor-pointer ${
          Route.Post === router.pathname ? 'opacity-1' : 'opacity-60'
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
      <Logo />
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
      <CSRNavbarItem ordersCount={ordersCount} {...authProps}/>
    </nav>
  )
}
