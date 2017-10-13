import React from 'react'
import styles from './Fingerprinted.module.scss'

const Fingerprinted = ({ children }) => (
  <div className={styles.fingerprinted}>
    <div>{children}</div>
  </div>
)

export default Fingerprinted
