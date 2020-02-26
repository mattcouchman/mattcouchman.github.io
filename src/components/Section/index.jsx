import React from "react"
import styled from "styled-components"

const Section = props => {
  const { className, children } = props

  return <section className={className}>{children}</section>
}

export const StyledSection = styled(Section)`
  background-color: ${props =>
    props.color ? props.theme.colors[props.color] : "#f5f5f5"};
  color: ${props => props.color && props.color === "accentAlt" && "#edefee"};
  padding: 8rem 2rem;
`

export default StyledSection
