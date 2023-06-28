import React, { useEffect, useMemo, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import { signOut } from '@/util'
import { useAppSelector } from '@/app/hooks'
import { ACCESS_TOKEN, Route } from '@/constant'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import Cookies from 'js-cookie'

const Badge = dynamic(() => import('@mui/material/Badge'))
const Link = dynamic(() => import('next/link'))

const CSRNavbarItem = () => {
  const items = useAppSelector(state => state.product).length
  const router = useRouter()

  const isAuth = useMemo(
    () => Cookies.get(ACCESS_TOKEN) !== undefined,
    [Cookies.get(ACCESS_TOKEN)]
  )

  return (
    <>
      {isAuth ? (
        <Badge
          className='cursor-pointer w-1/9 sm:w-full flex items-center justify-center p-2 sm:justify-center'
          color='error'
          variant={`${items > 0 ? 'dot' : 'standard'}`}
        >
          <Wrapper>
            <img
              className='w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:cursor-pointer'
              src='/assets/image/logo.jpg'
              alt=''
            />
            <ul>
              <li>
                <Link href={Route.Account}>Tài khoản của tôi</Link>
              </li>
              <li>
                <Link href={Route.Cart}>Đơn mua</Link>
              </li>
              <li onClick={() => signOut()}>Đăng xuất</li>
            </ul>
          </Wrapper>
        </Badge>
      ) : (
        <button
          className='mx-auto text-center text-lg p-2 w-1/9 sm:w-full flex justify-center items-center'
          onClick={() =>
            router.push('http://localhost:8082/api/v1/auth/oauth2Login/google')
          }
        >
          Login
        </button>
      )}
    </>
  )
}

export default CSRNavbarItem

const Wrapper = styled.div`
  position: relative;

  :hover {
    cursor: pointer hover:opacity-100;
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    :hover > ul {
      display: block;
      position: absolute;

      z-index: 49;
    }
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
