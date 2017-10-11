import React from 'preact'
import styles from './Hero.module.scss'

// Big pretty full-width section with vertically centered content
const Hero = ({ children, image, fullHeight }) => {
  const style = {
    'background-image': `
      repeating-linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.25),
        rgba(0, 0, 0, 0.25) 10px,
        rgba(0, 0, 0, 0.3) 10px,
        rgba(0, 0, 0, 0.3) 15px
      ),
      linear-gradient(
        110deg,
        hsla(120, 80%, 80%, 0.15),
        hsla(300, 100%, 80%, 0.4)
      ),
      url(${image})
    `
  }

  if (fullHeight) style['min-height'] = '100vh'

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
