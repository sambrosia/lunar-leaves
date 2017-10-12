import React from 'preact'
import Content from './Content'
import styles from './Footer.module.scss'

const Footer = () => (
  <section className={styles.footer}>
    <Content>Quisk, inc. © 2017</Content>
  </section>
)

export default Footer
