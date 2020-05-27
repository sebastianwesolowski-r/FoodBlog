import React from "react"
import styled from "styled-components"

import recipesImage from "../images/recipes-image.jpg"

import Layout from "../components/layout"

import {colors} from "../utils/colors"

const PageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RecipesPage = () => {
    return (
        <Layout img={recipesImage}>
            <PageHeader>
                <div style={{fontSize: `17px`}}>here you can find the perfect recipes for delicious food</div>
            </PageHeader>
        </Layout>
    )
}

export default RecipesPage