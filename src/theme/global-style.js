import {createGlobalStyle} from "styled-components"
//import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }
    html {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: 'Raleway';
        box-sizing: border-box;
    }
    body {
        margin: 0;
    }
`