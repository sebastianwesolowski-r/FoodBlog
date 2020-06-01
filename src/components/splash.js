import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import BigLogo from "../assets/big-logo.svg"
import Arrow from "../assets/arrow.svg";

import {colors} from "../utils/colors"

const SplashPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    top: 0;
    font-family: 'Raleway';
    color: ${colors.light};
    font-weight: 300;
    background-position: center;
    background-size: cover;
    padding: 80px 0;
    transition-duration: 350ms;
`

const Title = styled.div`
    font-size: 32px;
    margin-top: 25px;
`

const Quote = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 65px;
    margin-top: 120px;
`

const SplashOpener = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 40px;
    cursor: pointer;
    span {
        position: absolute;
        transition-duration: 150ms;
        opacity: 0;
    }
    svg {
        transition-duration: 250ms;
    }
    &:hover {
        span {
            transition-delay: 100ms;
            opacity: 100%;
        }
        svg {
            transform: translateY(-45px);
        }
    }
`

const Splash = () => {
    const data = useStaticQuery(graphql`
        query SplashImage {
                image: file(relativePath:{eq: "splash-image.jpg"}) {
                  id
                  childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
    `)
    const hideSplashPage = (event) => {
        event.target.parentElement.parentElement.style.transform = `translateY(-100vh)`;
    };
    return (
        <SplashPage>
            <Img style={{width: `100%`, height: `100%`, position: `absolute`, top: `0`, right: `0`, overflow: `hidden`, zIndex: `-1`}} fluid={data.image.childImageSharp.fluid} />
            <BigLogo/>
            <Title>Food Blog</Title>
            <Quote>
                <p className="quote" style={{fontSize: `19px`}}>“Taste is the feminine of genius.”</p>
                <p className="quote-author" style={{fontSize: `14px`}}>- Lord Edward FritzGerald</p>
            </Quote>
            <SplashOpener onClick={(event) => hideSplashPage(event)}>
                <Arrow />
                <span>Enter</span>
            </SplashOpener>
        </SplashPage>
    );
};



export default Splash