import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function useAdvancedScroll() {
  const sourceRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: sourceRef,
    layoutEffect: false
  })

  useEffect(() => {
    scrollYProgress.on('change', sourceScrollProgress => {
      if (sourceRef.current && targetRef.current) {
        let scrollPosition = targetRef.current.scrollHeight
        targetRef?.current.scrollTo(0, scrollPosition * sourceScrollProgress)
      }
    })

    return () => scrollYProgress.clearListeners()
  }, [sourceRef, targetRef, scrollYProgress])

  return { sourceRef, targetRef }
}
