import React from 'react'
import Content from './Content'
import styles from './Footer.module.scss'

const Footer = () => (
  <section className={styles.footer}>
    <Content>
      <div>
        <span>---------</span> <span>------</span> <span>-------------</span>{' '}
        <span>---------</span>
      </div>
      <div>
        <span>-----------------</span> © 2017
      </div>
    </Content>
  </section>
)

export default Footer
