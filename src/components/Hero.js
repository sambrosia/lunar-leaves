import React from 'react'
import styles from './Hero.module.scss'

// Big pretty full-width section with vertically centered content
const Hero = ({ children, image, fullHeight }) => {
  const style = {
    backgroundImage: `
      repeating-linear-gradient(
        135deg,
        transparent,
        transparent 10px,
        rgba(0, 0, 0, 0.03) 10px,
        rgba(0, 0, 0, 0.03) 15px
      ),
      linear-gradient(
        110deg,
        hsla(120, 15%, 35%, 0.25),
        hsla(300, 40%, 35%, 0.5)
      ),
      url(${image})
    `
  }

  if (fullHeight) style['minHeight'] = '100vh'

  return (
    <section className={styles.hero} style={style}>
      {children}
    </section>
  )
}

// Goes inside Hero. Good for indicating the page can scroll.
const HeroFooter = ({ children }) => (
  <div className={styles.heroFooter}>{children}</div>
)

export { Hero, HeroFooter }
export default Hero
