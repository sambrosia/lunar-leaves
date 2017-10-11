import React from 'preact'

import Link from 'gatsby-link'
import { FaAngleDown } from 'react-icons/lib/fa'
import { Hero, HeroFooter } from '../components/Hero'
import Content from '../components/Content'
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
          quam sit amet metus ultrices maximus at at enim. Aliquam sit amet
          neque in justo fringilla vehicula id ac augue. Morbi aliquam finibus
          dui, venenatis sollicitudin quam viverra sit amet. Duis nec
          scelerisque risus, id vulputate nisi. In faucibus dui in mollis
          interdum. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Suspendisse feugiat auctor mauris,
          at tincidunt ipsum mollis eget.
        </p>
        <Link to="/page-2/">Go to page 2</Link>
      </Content>
    </section>
  </div>
)

export default IndexPage
