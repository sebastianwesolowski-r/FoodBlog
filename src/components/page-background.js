import React from "react"
import Img from "gatsby-image"

const PageBackground = ({image}) => (
    <Img style={{width: `100%`, height: `100%`, position: `absolute`, top: `0`, right: `0`, overflow: `hidden`, zIndex: `-1`}} fluid={image} />
)

export default PageBackground