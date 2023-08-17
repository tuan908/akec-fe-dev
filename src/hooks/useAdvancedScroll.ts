import { useAnimate, useScroll } from 'framer-motion'
import { useState, type RefObject, useEffect } from 'react'

export function useAdvancedScroll(ref: RefObject<HTMLElement>) {
  const [scope, animate] = useAnimate()
  const { scrollYProgress } = useScroll({ container: ref })
  const [progress, setLatestProgressValue] = useState(0)

  useEffect(() => {
    scrollYProgress.on('change', latestValue => {
      setLatestProgressValue(latestValue)
      animate(
        scope.current,
        {
          y: `-${
            (scope.current as HTMLDivElement).scrollHeight * latestValue
          }px`
        },
        {
          ease: 'easeInOut',
          type: 'tween'
        }
      )
    })

    return () => scrollYProgress.clearListeners()
  }, [animate, scope, scrollYProgress])

  return {
    progress,
    scope
  }
}
