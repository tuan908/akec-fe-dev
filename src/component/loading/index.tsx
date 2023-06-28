import { CircularProgress } from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import styles from './Loading.module.scss'

interface LoadingProps {
  isLoading?: boolean
}

const BirdNestLoading = ({ isLoading }: LoadingProps) => {
  const loadingDivClasses = clsx(styles.loadingBackground, {
    'flex items-center justify-center top-0 right-0 left-0 bottom-0 w-screen h-screen z-50':
      isLoading
  })

  const circularProgressClasses = clsx(styles.circularProgress)
  return (
    <React.Fragment>
      <div className={loadingDivClasses}>
        <CircularProgress className={circularProgressClasses} size='5rem' />
      </div>
    </React.Fragment>
  )
}

export default BirdNestLoading
