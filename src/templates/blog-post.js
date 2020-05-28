import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

import {colors} from "../utils/colors"

import postImage from "../images/recipes-image.jpg"

const PostPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 100%;
    margin: auto;
    margin-top: -50px;
    h2 {
        font-weight: 400;
    }
    section {
        text-align: center;
        h3 {
            margin-top: 50px;
            margin-bottom: 30px;
            font-weight: 400;
        }
        img {
            width: 400px;
            height: 250px;
            border: 1px solid ${colors.dark};
        }
        span {
            color: ${colors.primary}
        }
        ol {
            list-style: none;
            counter-reset: counter;
          }
          ol li {
            counter-increment: counter;
          }
          ol li::before {
            content: counter(counter) ". ";
            color: ${colors.primary};
            font-weight: 500;
          }
        li {
            text-align: left;
            padding-left: 3px;
            margin: 20px 0;
        }
    }
`

export default ({data}) => {
    const post = data.markdownRemark;
    return (
        <Layout img={postImage}>
            <PostPage>
                <h2>{post.frontmatter.title}</h2>
                <section dangerouslySetInnerHTML={{__html: post.html}}></section>
            </PostPage>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
            }
        }
    }
`