import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Creating the content</h1>
    <p>Lets thik about the content you wanna create as well as a theme how it should look like.</p>
   
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Watch the video</Link>
  </Layout>
)

export default IndexPage
