import React from "react"
import styled from "styled-components"

const Container = props => {
  const { className, children } = props

  return <div className={className}>{children}</div>
}

const StyledContainer = styled(Container)`
  margin: 0 auto;
  max-width: 100rem;
`

export default StyledContainer
