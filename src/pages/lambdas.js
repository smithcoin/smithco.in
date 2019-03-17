import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Lambdas = () => (
  <Layout>
    <SEO title="Lambdas" />
    <h1>Lambdas</h1>
    <h4> This site makes use of Netlify Lambdas. Try them out!</h4>
    <ul>
      <li><code>$ curl --request POST -d "Content-Length: 0" --url https://js.smithco.in/.netlify/functions/teapot</code></li>
      <li><code>$ curl --request POST -d "Content-Length: 0" --url https://go.smithco.in/.netlify/functions/hello-world</code></li>
    </ul>
    <Link to="/">Return</Link>
  </Layout>
  
)

export default Lambdas