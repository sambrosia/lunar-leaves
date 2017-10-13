import React from 'react'

import { FaAngleDown } from 'react-icons/lib/fa'
import { Hero, HeroFooter } from '../components/Hero'
import Content from '../components/Content'
import Fingerprinted from '../components/Fingerprinted'
import Button from '../components/Button'

import splash from './splash.jpg'

const IndexPage = () => (
  <div>
    <Hero image={splash} fullHeight>
      <Content>
        <h1>Quisk.</h1>
        <h3>
          We bring you <u>fast</u>, <u>simple</u>, and <u>secure</u> mobile
          payment.
        </h3>
        <Button>Let's talk.</Button>
      </Content>

      <HeroFooter>
        <div>Learn more.</div>
        <FaAngleDown size={48} />
      </HeroFooter>
    </Hero>

    <section>
      <Content>
        <h1>The next step in the evolution of money.</h1>
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
  </div>
)

export default IndexPage
