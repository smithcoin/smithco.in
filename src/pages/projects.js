import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <p> Recently I have begun playing around with Arduino and Rasperberry Pis</p>
    <p> I'm going to document my work here as I progress more.</p>
    <p> For now you can checkout my <a href="https://github.com/smithcoin">github</a>.
    <Link to="/">Return</Link>
  </Layout>

)

export default Projects
