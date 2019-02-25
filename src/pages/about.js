import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>Daniel Smith</h1>
    <p>Welcome to the "About me" Page</p>
    <p>For once, I don't have much to say about myself.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Return</Link>
  </Layout>
  
)

export default About