import React from "react"
import styled from "styled-components"

import travelImage from "../images/travel-image.jpg"

import Layout from "../components/layout"

import {colors} from "../utils/colors"

const PageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TravelPage = () => {
    return (
        <Layout img={travelImage}>
            <PageHeader>
                <div style={{fontSize: `17px`}}>travel around the world with me and discover new flavors</div>
            </PageHeader>
        </Layout>
    )
}

export default TravelPage