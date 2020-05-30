import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import travelImage from "../images/travel-image.jpg"

import Layout from "../components/layout"

import {colors} from "../utils/colors"

const PageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TravelContainer = styled.div`
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

const Travel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 310px;
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

const TravelDescription = styled.div`
    width: 340px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    p {
        margin: 0;
        padding: 0;
    }
`

const TravelPage = ({data}) => {
    return (
        <Layout img={travelImage}>
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
    }
`