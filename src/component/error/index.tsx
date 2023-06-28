import { FunctionComponent } from 'react'

interface Props {
  isError: boolean
}

const BirdNestError: FunctionComponent<Props> = ({ isError }) => {
  return isError ? (
    <>
      <h1>We have error here.</h1>
      <h1>Please contact page admin.</h1>
    </>
  ) : (
    <></>
  )
}

export default BirdNestError
