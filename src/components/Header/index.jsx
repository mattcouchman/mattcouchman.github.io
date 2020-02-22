import styled from "styled-components"
import Header from "./Header"

const StyledHeader = styled(Header)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.accentAlt};
  padding: 8rem 2rem;

  @media screen and (min-width: 760px) {
    padding: 12rem 2rem;
  }
`

export default StyledHeader
