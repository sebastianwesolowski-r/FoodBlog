import {createGlobalStyle} from "styled-components"
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        font-family: 'Raleway';
    }
`