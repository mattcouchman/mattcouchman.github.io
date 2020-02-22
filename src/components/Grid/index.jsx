import styled from "styled-components"
import Grid from "./Grid"

const StyledGrid = styled(Grid)`
  @media screen and (min-width: 760px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -3rem 3rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  > * {
    margin-bottom: 3rem;

    @media screen and (min-width: 760px) {
      flex: 1;
      margin-bottom: 0;
      padding: 0 3rem;
      width: ${props => props.width && props.width};
    }
  }
`

export default StyledGrid
