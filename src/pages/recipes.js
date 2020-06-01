import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import {PageHeader} from "../components/page-header"
import {RecipesContainer, Recipe} from "../components/recipes-styled"
import PageBackground from "../components/page-background"

const RecipesPage = ({data}) => {
    console.log(data.allMarkdownRemark)
    return (
        <Layout>
            <PageBackground image={data.file.childImageSharp.fluid} />
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
        file(relativePath:{eq: "recipes-image.jpg"}) {
            id
            childImageSharp {
              fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
              }
            }
        }
    }
`