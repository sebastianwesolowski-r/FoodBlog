import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import recipesImage from "../images/recipes-image.jpg"

import Layout from "../components/layout"

import {colors} from "../utils/colors"

const PageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RecipesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: auto;
    width: 85%;
    margin: 70px auto;
    &::after {
        content: '';
        flex: 0 0 32%;
        max-width: 390px;
    }
`

const Recipe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 340px;
    height: 300px;
    font-size: 15px;
    font-weight: 500;
    margin: 0 25px;
    margin-bottom: 30px;
    img {
        width: 340px;
        height: 250px;
        border: 1px solid ${colors.primary}
    }
`

const RecipesPage = ({data}) => {
    return (
        <Layout img={recipesImage}>
            <PageHeader>
                <div style={{fontSize: `17px`}}>here you can find the perfect recipes for delicious food</div>
            </PageHeader>
            <RecipesContainer>
                {data.allMarkdownRemark.edges.map(({node}) => (
                    node.frontmatter.category === "recipes" ? (
                        <Link to={node.fields.slug}  key={node.id} style={{color: `unset`, textDecoration: `none`}}>
                            <Recipe>
                                <img src={node.frontmatter.banner.publicURL} alt={node.frontmatter.title}/>
                                <p>{node.frontmatter.title}</p>
                            </Recipe>
                        </Link>
                    ) : null
                ))
                }
            </RecipesContainer>
        </Layout>
    )
}

export default RecipesPage

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
            node {
                id
                frontmatter {
                    title
                    category
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
    }
`