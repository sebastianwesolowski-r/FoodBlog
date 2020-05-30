import React from "react"

import SEO from "../components/seo"

import {GlobalStyle} from "../theme/global-style"
import splashImage from "../images/splash-image.jpg"

const NotFoundPage = () => (
  <div style={{
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    width: `100vw`,
    height: `100vh`,
    backgroundImage: `url(${splashImage})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    color: `#ffffff`,
    padding: `0`,
    margin: `0`
  }}>
    <GlobalStyle/>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Page could not be loaded</p>
  </div>
)

export default NotFoundPage
