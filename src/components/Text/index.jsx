import styled from "styled-components"
import Text from "./Text"

const StyledText = styled(Text)`
  ${props => props.theme.text.rg};
  ${props => props.size && props.theme.text[props.size]};
  color: ${props => props.color && props.theme.colors[props.color]};
  font-weight: ${props => props.weight && props.weight};
  margin-bottom: ${props => (props.margin ? props.margin : "2rem")};

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: ${props => props.theme.colors.accentAlt};
  }
`

export default StyledText
