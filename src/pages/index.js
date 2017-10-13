import React from 'react'

import Helmet from 'react-helmet'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import FaShoppingBag from 'react-icons/lib/fa/shopping-bag'
import FaBank from 'react-icons/lib/fa/bank'
import FaBuilding from 'react-icons/lib/fa/building'
import { Hero, HeroFooter } from '../components/Hero'
import Content from '../components/Content'
import Fingerprinted from '../components/Fingerprinted'
import Button from '../components/Button'

import splash from './splash.jpg'
import walking from './walking.jpg'

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
        <h1>Quisk.</h1>
        <Fingerprinted>
          <h3>
            We bring you <u>fast</u>, <u>simple</u>, and <u>secure</u> mobile
            payment.
          </h3>
          <Button>Let's talk.</Button>
        </Fingerprinted>
      </Content>

      <HeroFooter>
        <div>Learn more.</div>
        <FaAngleDown size={48} />
      </HeroFooter>
    </Hero>

    <section>
      <Content>
        <Row>
          <Card>
            <FaShoppingBag
              size={48}
              style={{
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: '1rem'
              }}
            />
            <h3>For consumers.</h3>
            <Fingerprinted>
              <p>
                Sed nulla ante, dignissim ac nibh et, venenatis elementum neque.
              </p>
            </Fingerprinted>
          </Card>
          <Card>
            <FaBank
              size={48}
              style={{
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: '1rem'
              }}
            />
            <h3>For banks.</h3>
            <p>
              Nullam fermentum arcu a lectus tempor, in pretium sem sodales.
            </p>
          </Card>
          <Card>
            <FaBuilding
              size={48}
              style={{
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: '1rem'
              }}
            />
            <h3>For businesses.</h3>
            <p>Integer sit amet arcu nisl. Mauris quis hendrerit purus.</p>
          </Card>
        </Row>
      </Content>
    </section>

    <Hero image={walking}>
      <Content>
        <h1>The next step...</h1>
        <h3>...in the evolution of money.</h3>
      </Content>
    </Hero>

    <section style={{ background: '#ebebeb' }}>
      <Content>
        <h1>Lead the way.</h1>
        <Fingerprinted>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            aliquam tincidunt nisl eget venenatis. Aliquam sem risus, dapibus
            sed accumsan quis, ornare non tortor.
          </p>
          <p>
            Etiam hendrerit massa nec vestibulum interdum. Aenean lorem mauris,
            bibendum nec varius quis, laoreet non sapien. Vestibulum volutpat
            dapibus metus, quis sagittis libero vulputate quis. Etiam varius
            volutpat nisl at egestas. Curabitur a accumsan eros.
          </p>
        </Fingerprinted>
      </Content>
    </section>

    <section>
      <Content>
        <h1>Schedule a consult.</h1>
        <Fingerprinted>
          <p>
            Praesent augue velit, tempor a hendrerit et, bibendum quis erat.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Aenean sit amet ex eget mi tincidunt
            tincidunt mollis sit amet justo.
          </p>
          <Button>Sounds great.</Button>
        </Fingerprinted>
      </Content>
    </section>
  </div>
)

export default IndexPage
