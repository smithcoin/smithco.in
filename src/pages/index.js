import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Astronaut from "../components/astronaut"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello World!</h1>
    <p>Welcome to my website.</p>
    <p>You can shoot me an <a href="mailto:daniel@smithco.in">email</a>.</p>
    <p>Great things to come.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Astronaut />
    </div>
    <Link to="/lambdas/">Lambdas</Link><br></br>
    <Link to="/about/">About Me</Link>
  </Layout>
)

export default IndexPage
