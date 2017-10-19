import React from 'react'

import Helmet from 'react-helmet'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import { Hero, HeroFooter } from '../components/Hero'
import Content from '../components/Content'
import Fingerprinted from '../components/Fingerprinted'
import Button from '../components/Button'

import splash from './splash.jpg'

const Row = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    {children}
  </div>
)

const Card = ({ children }) => <div style={{ width: '213px' }}>{children}</div>

const IndexPage = () => (
  <div>
    <Helmet>
      <link rel="preload" href={splash} as="image" />
    </Helmet>

    <Hero image={splash} fullHeight>
      <Content>
        <h1>Lunar Leaves.</h1>
        <Fingerprinted>
          <h3>
            The Earth's <u>finest</u> teas, delivered to your pod daily.
          </h3>
          <Button>Sign me up!</Button>
        </Fingerprinted>
      </Content>

      <HeroFooter>
        <div>Learn more.</div>
        <FaAngleDown size={48} />
      </HeroFooter>
    </Hero>

    <section>
      <Content>
        <h1>Expertly curated.</h1>
        <Fingerprinted>
          <p>
            Praesent augue velit, tempor a hendrerit et, bibendum quis erat.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Aenean sit amet ex eget mi tincidunt
            tincidunt mollis sit amet justo.
          </p>
        </Fingerprinted>
      </Content>
    </section>
  </div>
)

export default IndexPage
