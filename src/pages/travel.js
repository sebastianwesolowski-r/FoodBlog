import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import {PageHeader} from "../components/page-header"
import {TravelContainer, Travel, TravelDescription} from "../components/travel-styled"
import PageBackground from "../components/page-background"

const TravelPage = ({data}) => {
    return (
        <Layout>
            <PageBackground image={data.file.childImageSharp.fluid} />
            <PageHeader>
                <div style={{fontSize: `17px`}}>travel around the world with me and discover new flavors</div>
            </PageHeader>
            <TravelContainer>
                {data.allMarkdownRemark.edges.map(({node}) => (
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
            </TravelContainer>
        </Layout>
    )
}

export default TravelPage

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
        file(relativePath:{eq: "travel-image.jpg"}) {
            id
            childImageSharp {
              fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
              }
            }
        }
    }
`