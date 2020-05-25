import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Recipes from '../assets/recipes.svg'
import FoodBlogLogo from '../assets/foodblog.svg'
import Travel from '../assets/travel.svg'

import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 25%;
`

const BlogLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 135px;
  height: 75px;
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
  color: #000000;
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
      <FoodBlogLogo />
      <BlogLink style={{fontSize: `24px`}}>
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
