import { m, useScroll, useSpring } from 'framer-motion'
import styles from './progress-bar.module.scss'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return <m.div className={styles.progressBar} style={{ scaleX }} />
}