import React from "react"
import styled from "styled-components"

const Heading = props => {
  const { className, children, element = "h3" } = props
  const Element = element

  return <Element className={className}>{children}</Element>
}

export const StyledHeading = styled(Heading)`
  ${props => {
    const element = props.size || props.element || "h3"

    return props.theme.heading[element]
  }}
  color: ${props => props.color && props.theme.colors[props.color]};
  /* letter-spacing: -0.1rem; */
  margin-bottom: ${props => props.margin && props.margin};
`

export default StyledHeading
