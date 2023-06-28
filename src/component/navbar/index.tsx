import { useAppSelector } from '@/app/hooks'
import { Route } from '@/constant'
import { signOut } from '@/util'
import styled from '@emotion/styled'
import { Badge } from '@mui/material'
import Link from 'next/link'
import { MouseEventHandler, useRef, useState } from 'react'
import styles from './Navbar.module.scss'

export default function Navbar() {
  const cart = useAppSelector(state => state.product)
  const currentCartItems = cart.length

  const [isAnimate, setAnimate] = useState(false)

  const moveDownRef = useRef<HTMLSpanElement>(null)
  const moveIntoTxt = useRef<HTMLSpanElement>(null)
  const moveIntoIcon = useRef<HTMLSpanElement>(null)

  const handleOnMouseEnter: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault()
    setAnimate(true)
  }

  const handleOnMouseLeave: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault()
    setAnimate(false)
  }

  return (
    <NavbarStyled>
      <Link href={Route.About} className='cursor-pointer'>
        Tin tức
      </Link>
      <Link href={Route.Products} className={styles.productMenu}>
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
        className='cursor-pointer'
        onMouseEnter={e => handleOnMouseEnter(e)}
        onMouseLeave={e => handleOnMouseLeave(e)}
      >
        {/* <img src={LOGO} alt='AKEC Logo' className='w-10 h-10' /> */}
        <span className='text-center text-3xl flex flex-row'>
          <span
            className={`${isAnimate ? styles.moveInLeft : styles.moveOutLeft}`}
          >
            A
          </span>
          <span className={`${isAnimate ? styles.hideTxt : styles.showTxt}`}>
            KEC
          </span>
          <span
            className={`text-lg text-right flex items-start justify-start ${
              isAnimate ? styles.moveInRight : styles.moveOutRight
            }`}
            ref={moveIntoIcon}
          >
            &#174;
          </span>
        </span>
      </Link>

      {/* <Link href={Routes.CART} className='cursor-pointer'> */}
      {/* <Badge badgeContent={currentCartItems}>
          <ShoppingCart />
        </Badge> */}
      {/* Giỏ hàng
      </Link> */}
      <Link href={Route.Contact} className='cursor-pointer'>
        Liên hệ
      </Link>
      {/* <button onClick={() => signOut()}>
        <LogoutIcon />
      </button> */}
      <Badge
        color='error'
        variant={`${currentCartItems > 0 ? 'dot' : 'standard'}`}
      >
        <AvatarStyled>
          <AvatarImgStyled src='https://pbs.twimg.com/media/FsEB08ZaEAAa-jk?format=jpg&name=large' />
          <ul>
            <li>
              <Link href={Route.Account}>Tài khoản của tôi</Link>
            </li>
            <li>
              <Link href={Route.Cart}>
                <Badge
                  color='error'
                  badgeContent={
                    currentCartItems >= 10 ? '9+' : currentCartItems
                  }
                >
                  <span className='pr-2'>Đơn mua</span>
                </Badge>
              </Link>
            </li>
            <li onClick={() => signOut()}>Đăng xuất</li>
          </ul>
        </AvatarStyled>
      </Badge>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
  width: 100%;
  top: 0;
  position: sticky;

  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  z-index: 50;

  padding: 1rem;
  margin-left: auto;
  margin-right: auto;

  background-color: #2c2519;
  color: #ffffff;
`

const AvatarStyled = styled.div`
  position: relative;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }

  :hover > ul {
    display: block;
    position: absolute;

    z-index: 9999;
  }

  ul {
    display: none;
    width: 200px;

    background-color: #333;
    left: 0;
  }

  li {
    padding: 0.625rem 0.75rem;
    border: 1px solid #fff;

    :hover {
      background-color: rgb(110, 116, 139);
    }
  }
`

const AvatarImgStyled = styled.img`
  border-radius: 9999px;

  width: 36px;
  height: 36px;
`
