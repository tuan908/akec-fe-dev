import { Route } from '@/constant'
import dynamic from 'next/dynamic'
import { Yeseva_One } from 'next/font/google'
import { useRouter } from 'next/router'
import { MouseEventHandler, useState } from 'react'
import styles from './navbar.module.scss'

const Link = dynamic(() => import('next/link'))
const Sidebar = dynamic(() => import('./Sidebar'))
const CSRNavbarItem = dynamic(() => import('./CSRNavbarItem'), {
  ssr: false
})

const yesevaOneLocal = Yeseva_One({ weight: '400', subsets: ['latin'] })

export default function Navbar() {
  const router = useRouter()
  const [animationClasses, setClasses] = useState({
    logoPart1: '',
    logoPart2: '',
    logoPart3: ''
  })

  const handleOnMouseEnter: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault()
    setClasses({
      ...animationClasses,
      logoPart1: styles.moveInLeft!,
      logoPart2: styles.hideTxt!,
      logoPart3: styles.moveInRight!
    })
  }

  const handleOnMouseLeave: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault()
    setClasses({
      ...animationClasses,
      logoPart1: styles.moveOutLeft!,
      logoPart2: styles.showTxt!,
      logoPart3: styles.moveOutRight!
    })
  }

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
      {/* Change from img => text */}
      <Link
        href={Route.Home}
        className={`w-7/9 flex justify-center items-center sm:w-fit cursor-pointer text-2xl ${
          Route.Home === router.pathname ? 'opacity-1' : 'opacity-60'
        } ${yesevaOneLocal.className}`}
        onMouseEnter={e => handleOnMouseEnter(e)}
        onMouseLeave={e => handleOnMouseLeave(e)}
      >
        {/* <img src={LOGO} alt='AKEC Logo' className='w-10 h-10' /> */}
        <span className='text-center text-3xl flex flex-row'>
          <span className={animationClasses.logoPart1}>A</span>
          <span className={animationClasses.logoPart2}>KEC</span>
          <span
            className={`text-lg text-right flex items-start justify-start ${animationClasses.logoPart3}`}
          >
            &#174;
          </span>
        </span>
      </Link>
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
