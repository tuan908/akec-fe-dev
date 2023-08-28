import { Route } from '@/constant'
import styled from '@emotion/styled'
import { Badge } from '@mui/material'
import { type Session } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { type FC } from 'react'

type Props = {
  session: Session | null | undefined
  items: number
}

const CSRNavbarItem: FC<Props> = ({ session, items }) => {
  if (session)
    return (
      <Wrapper>
        <Badge color='error' variant={`${items > 0 ? 'dot' : 'standard'}`}>
          <NextImage
            className='w-auto h-auto sm:w-9 sm:h-9 rounded-full hover:cursor-pointer'
            src={session!?.user!?.image!}
            alt=''
            width={60}
            height={60}
          />
          <ul>
            {session!?.user!?.email}
            <li>
              <NextLink href={Route.Account}>Tài khoản</NextLink>
            </li>
            <li>
              <NextLink href={Route.Cart}>Đơn mua</NextLink>
            </li>
            <li onClick={() => signOut()}>Đăng xuất</li>
          </ul>
        </Badge>
      </Wrapper>
    )

  return (
    <Wrapper>
      <span onClick={() => signIn('google', { redirect: true })}>Login</span>
    </Wrapper>
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
    :hover ul {
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
    top: 2rem;
  }

  li {
    padding: 0.625rem 0.75rem;
    border: 1px solid #fff;

    :hover {
      background-color: rgb(110, 116, 139);
    }
  }
`
