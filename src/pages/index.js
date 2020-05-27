import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Splash from "../components/splash"

import FbIcon from "../assets/fb.svg"
import IgIcon from "../assets/ig.svg"
import TtIcon from "../assets/tt.svg"
import YtIcon from "../assets/yt.svg"
import landingImage from '../images/landing-image.jpg'

import {colors} from '../utils/colors';

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 125px;
`

const RecipesButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 30px;
  font-size: 16px;
  text-decoration: none;
  color: ${colors.dark};
  border: 1px solid ${colors.primary};
  border-radius: 2px;
  background: transparent;
  outline: none;
  transition-duration: 180ms;
  &:hover {
    box-shadow: inset 140px 0 0 0 #842B2B;
    color: ${colors.light};
  }
`

const BlogFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  height: 22px;
  position: absolute;
  bottom: 35px;
  left: 0;
  right: 0;
  margin: auto;
`

const IndexPage = () => (
  <>
    <Splash />
    <Layout img={landingImage}>
    <SEO title="Home" />
      <Greeting>
        <div style={{fontSize: `21px`}}>Welcome to <span style={{color: `#842B2B`}}>Food Blog</span></div>
        <div style={{fontSize: `17px`}}>If you are a food lover searching for new tastes you have come to the right place!</div>
        <RecipesButton to="/recipes">browse recipes</RecipesButton>
      </Greeting>
      <BlogFooter>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FbIcon />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <IgIcon />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TtIcon />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <YtIcon />
        </a>
      </BlogFooter>
    </Layout>
  </>
)

export default IndexPage
