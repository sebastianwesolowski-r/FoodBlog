/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import {GlobalStyle} from "../theme/global-style"
import Header from "./header"

const LandingPage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://i.imgur.com/NK6PNZN.jpg');
  background-position: center;
  background-size: cover;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LandingPage>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <GlobalStyle />
        <main>{children}</main>
      </div>
    </LandingPage>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
