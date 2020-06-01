import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import SEO from "../components/seo"

import {GlobalStyle} from "../theme/global-style"
import PageBackground from "../components/page-background"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
  query ErrImage {
          image: file(relativePath:{eq: "splash-image.jpg"}) {
            id
            childImageSharp {
              fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
  `)
  return (
    <div style={{
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      width: `100vw`,
      height: `100vh`,
      backgroundPosition: `center`,
      backgroundSize: `cover`,
      color: `#ffffff`,
      padding: `0`,
      margin: `0`
    }}>
      <PageBackground image={data.image.childImageSharp.fluid} />
      <GlobalStyle/>
      <SEO title="404: Not found" />
      <h1>404</h1>
      <p>Page could not be loaded</p>
    </div>
  )
}

export default NotFoundPage
