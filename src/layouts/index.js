import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content from '../components/Content'
import styles from './index.module.scss'

const Footer = () => (
  <section className={styles.footer}>
    <Content>
      <div>
        <span>---------</span> <span>------</span> <span>-------------</span>{' '}
        <span>---------</span>
      </div>
      <div>
        <span>-----------------</span> © 2077
      </div>
    </Content>
  </section>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Lunar Leaves ● Tea from the Earth to the Moon."
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
