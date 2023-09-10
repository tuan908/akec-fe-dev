import { Route } from '@/constant'
import useHasMounted from '@/hooks/useMountState'
import styled from '@emotion/styled'
import { type Session } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { type FC } from 'react'

const NextImage = dynamic(() => import('next/image'))
const NextLink = dynamic(() => import('next/link'))
const Badge = dynamic(() => import('@mui/material/Badge'))
const Skeleton = dynamic(() => import('@mui/material/Skeleton'))

type Props = {
  session: Session | null
  ordersCount: number
  ready: boolean
}

const CSRNavbarItem: FC<Props> = ({ session, ordersCount, ready }) => {
  const isMounted = useHasMounted()
  if (!ready) {
    return <Skeleton variant='circular' width={40} height={40} />
  }

  if (!isMounted) {
    return null
  }

  return (
    <>
      {session === null ? (
        <button onClick={() => signIn('google', { redirect: true })}>
          Login
        </button>
      ) : (
        <Wrapper>
          <Badge
            color='error'
            variant={`${ordersCount > 0 ? 'dot' : 'standard'}`}
          >
            <NextImage
              className='w-8 h-8 lg:w-10 lg:h-10 rounded-full hover:cursor-pointer'
              src={session?.user?.image!}
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
      )}
    </>
  )
}

export default CSRNavbarItem

const Wrapper = styled.div`
  position: relative;

  :hover {
    cursor: pointer;
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