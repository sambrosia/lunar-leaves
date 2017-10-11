import React from 'preact'
import Link from 'gatsby-link'
import styles from './Button.module.scss'

const Button = ({ children }) => (
  <Link className={styles.button} to="#">
    {children}
  </Link>
)

export default Button
