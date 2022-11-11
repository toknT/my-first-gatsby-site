import * as React from "react"
import { HeadFC, Link } from "gatsby"
import Layout from "./layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
