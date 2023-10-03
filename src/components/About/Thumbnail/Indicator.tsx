import clsx from 'clsx'
import { FC, MouseEventHandler } from 'react'

type ThumbnailIndicatorProps = {
  active: boolean
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

const ThumbnailIndicator: FC<ThumbnailIndicatorProps> = props => {
  const classes = clsx(
    'w-4 h-4 z-9999 inline-block mx-2 rounded-full hover:cursor-pointer',
    props.active
      ? 'bg-indicatorActive hover:bg-indicatorInactive'
      : 'bg-indicatorInactive hover:bg-indicatorActive'
  )

  return <button className={classes} onClick={props.onClick} />
}

export default ThumbnailIndicator