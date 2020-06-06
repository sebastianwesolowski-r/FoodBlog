import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Splash from "../components/splash"
import {Travel, TravelDescription} from "../components/travel-styled"
import PageBackground from "../components/page-background"

import FbIcon from "../assets/fb.svg"
import IgIcon from "../assets/ig.svg"
import TtIcon from "../assets/tt.svg"
import YtIcon from "../assets/yt.svg"

import {colors} from '../utils/colors';

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 125px;
  text-align: center;
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
  margin: auto;
  margin-top: 90px;
  margin-bottom: 20px;
`

const PreviewPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 62%;
  margin: auto;
  margin-top: 80px;
  @media (max-width: 800px) {
    flex-direction: column;
    width: fit-content;
    margin-top: 40px;
  }
`

const IndexPage = ({data}) => (
  <>
    <Splash />
    <PageBackground image={data.file.childImageSharp.fluid} />
    <Layout>
    <SEO title="Home" />
      <Greeting>
        <div style={{fontSize: `21px`}}>Welcome to <span style={{color: `#842B2B`}}>Food Blog</span></div>
        <div style={{fontSize: `17px`}}>If you are a food lover searching for new tastes you have come to the right place!</div>
        <RecipesButton to="/recipes">browse recipes</RecipesButton>
      </Greeting>
      <PreviewPosts>
        {data.allMarkdownRemark.edges.filter((item, idx) => idx > 1).map(({node}) => (
            node.frontmatter.category === "travel" ? (
                <Link to={node.fields.slug}  key={node.id} style={{color: `unset`, textDecoration: `none`}}>
                    <Travel>
                        <img src={node.frontmatter.banner.publicURL} alt={node.frontmatter.title}/>
                        <TravelDescription>
                            <p>{node.frontmatter.title}</p>
                            <p style={{fontSize: `13px`, fontWeight: `400`, marginTop: `5px`, textAlign: `center`}}>{node.frontmatter.description}</p>
                        </TravelDescription>
                    </Travel>
                </Link>
            ) : null
        ))
        }
      </PreviewPosts>
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

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
            node {
                id
                frontmatter {
                    title
                    category
                    description
                    banner {
                        publicURL
                    }
                }
                fields {
                    slug
                }
            }
            }
        }
        file(relativePath:{eq: "landing-image.jpg"}) {
          id
          childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
      }
    }
`