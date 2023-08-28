import { Route } from '@/constant'
import { Yeseva_One } from 'next/font/google'
import Link from 'next/link'
import router from 'next/router'
import { useState, type MouseEventHandler } from 'react'
import styles from './navbar.module.scss'

const yesevaOneLocal = Yeseva_One({ weight: '400', subsets: ['latin'] })

export default function Logo() {
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
    <>
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
    </>
  )
}
