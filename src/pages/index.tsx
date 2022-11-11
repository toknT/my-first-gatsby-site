import * as React from "react"
import { HeadFC, Link } from "gatsby"
import Layout from "./layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <StaticImage
        alt="Gatsby.js icon"
        src="../images/icon.png"
      />
    </Layout>
  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
