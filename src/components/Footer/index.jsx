import React from "react"
import styled from "styled-components"

const Footer = props => {
  const { className } = props

  return (
    <footer className={className}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

const StyledFooter = styled(Footer)`
  padding: 4rem 2rem;
  text-align: center;

  a {
    color: ${props => props.theme.colors.accent};
  }
`

export default StyledFooter
