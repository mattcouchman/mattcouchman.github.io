import React from "react"
import Container from "../Container"
import Heading from "../Heading"
import Text from "../Text"

const Header = props => {
  const { className } = props

  return (
    <div className={className}>
      <Container>
        <Heading element="h1" size="h3" margin="2rem" color="accent">
          Hello, I'm Matt Couchman
        </Heading>
        <Heading element="h3" size="h2" margin="5rem">
          Front end developer based in Birmingham, UK. Creating design systems
          and applications with React.
        </Heading>
        <Text>
          <a href="">LinkedIn</a> <a href="">Github</a>
        </Text>
      </Container>
    </div>
  )
}

export default Header
