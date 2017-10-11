import React from 'preact'
import Link from 'gatsby-link'
import { FaAngleDown } from 'react-icons/lib/fa'
import styles from './index.module.scss'
import splash from './splash.jpg'

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
    <div className={styles.hero} style={style}>
      {children}
    </div>
  )
}

const Content = ({ children }) => (
  <div className={styles.content}>{children}</div>
)

const Button = ({ children }) => (
  <Link className={styles.button} to="#">
    {children}
  </Link>
)

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

      <a className={styles.heroBottom}>
        <div>Learn more.</div>
        <FaAngleDown size={48} />
      </a>
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
