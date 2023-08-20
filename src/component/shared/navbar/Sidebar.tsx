import { Route } from '@/constant'
import { useAuth } from '@/hooks'
import { signOut } from '@/util'
import { signIn } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const MenuIcon = dynamic(() => import('@mui/icons-material/Menu'))
const SwipeableDrawer = dynamic(() => import('@mui/material/SwipeableDrawer'))
const Link = dynamic(() => import('next/link'))
const Image = dynamic(() => import('next/image'))

type Anchor = 'left'

export default function Sidebar() {
  const [isToggle, setToggle] = useState({
    left: false
  })
  const [session] = useAuth()

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setToggle({ ...isToggle, [anchor]: open })
    }
  return (
    <>
      <div
        className='w-1/8 flex justify-start items-center sm:hidden'
        onClick={toggleDrawer('left', true)}
        onKeyDown={toggleDrawer('left', true)}
      >
        <MenuIcon fontSize='large' />
      </div>

      <SwipeableDrawer
        sx={{ width: 300 }}
        anchor={'left'}
        open={isToggle['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
        disableBackdropTransition
      >
        <ul className='bg-white'>
          <li
            className='w-full p-4 flex items-center justify-center'
            onClick={toggleDrawer('left', false)}
          >
            <Link href={Route.Home}>
              <Image
                src='/assets/image/logo.jpg'
                alt='logo'
                width={300}
                height={24}
                className='w-full hover:opacity-90'
                priority
              />
            </Link>
          </li>
          <li
            className='pb-4 px-8 font-bold'
            onClick={toggleDrawer('left', false)}
          >
            <Link href={Route.Home}>HOME</Link>
          </li>
          {[Route.Post, Route.Products, Route.Contact, Route.Cart].map(
            (route, index) => (
              <li
                key={index}
                className='py-4 px-8 font-bold'
                onClick={toggleDrawer('left', false)}
              >
                <Link href={route}>{route.replace('/', '').toUpperCase()}</Link>
              </li>
            )
          )}
          {session !== undefined && session !== null ? (
            <li
              onClick={() => {
                toggleDrawer('left', false)
                signOut()
              }}
            >
              Sign out
            </li>
          ) : (
            <li
              onClick={() => {
                toggleDrawer('left', false)
                signIn()
              }}
            >
              Sign in
            </li>
          )}
        </ul>
      </SwipeableDrawer>
    </>
  )
}