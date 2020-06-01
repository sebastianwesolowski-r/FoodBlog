import styled from "styled-components"

import {colors} from "../utils/colors"

export const TravelContainer = styled.div`
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
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: unset;
        margin: 15px 0;
    }
`

export const Travel = styled.div`
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

export const TravelDescription = styled.div`
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