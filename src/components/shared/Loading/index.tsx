import { CircularProgress } from '@mui/material'
import React from 'react'

const BirdNestLoading = () => {
  return (
    <div
      className='flex items-center justify-center w-full max-w-screen h-full min-h-screen'
    >
      <CircularProgress size='5rem' />
    </div>
  )
}

export default BirdNestLoading
