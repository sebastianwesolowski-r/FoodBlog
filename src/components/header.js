import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Recipes from "../assets/recipes.svg"
import Travel from "../assets/travel.svg"
import SmallLogo from "../assets/small-logo.svg"

import {colors} from '../utils/colors';

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 25%;
  @media (max-width: 800px) {
    padding: 0 4%;
  }
`

const BlogLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 135px;
  height: 70px;
`

const BlogRef = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  height: 24px;
`
const BlogLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: ${colors.dark};
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <BlogRef>
      <Recipes />
      <BlogLink to="/recipes">
        recipes
      </BlogLink>
    </BlogRef>
    <BlogLogo>
      <SmallLogo />
      <BlogLink to="/" style={{fontSize: `24px`}}>
        {siteTitle}
      </BlogLink>
    </BlogLogo>
    <BlogRef style={{paddingRight: `10px`}}>
      <BlogLink to="/travel">
        travel
      </BlogLink>
      <Travel />
    </BlogRef>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
