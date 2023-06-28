import { useState, type FC } from 'react'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'

const MuiRating = dynamic(() => import('@mui/material/Rating'))

const Rating: FC = () => {
  const [value, setVal] = useState<number | null>(5)

  return (
    <Wrapper>
      <ChildWrapper slot='number'>{value}</ChildWrapper>
      <ChildWrapper slot='star'>
        <MuiRating
          value={value}
          size='small'
          onChange={(_, newValue) => setVal(newValue)}
        />
      </ChildWrapper>
    </Wrapper>
  )
}

export default Rating

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-areas: 'star number';
`

const ChildWrapper = styled.div<{ slot: 'star' | 'number' }>`
  grid-area: ${props => props.slot};
`
