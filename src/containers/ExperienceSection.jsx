import React from "react"
import Section from "../components/Section"
import Container from "../components/Container"
import Grid from "../components/Grid"
import Heading from "../components/Heading"

const ExperienceSection = () => {
  return (
    <Section color="accentAlt">
      <Container>
        <Heading>Experience</Heading>
        <Grid>
          <div>
            <Heading element="h6" margin="0" color="whiteSemiTransparent">
              2016-Present
            </Heading>
            <Heading element="h5" size="h4" margin="0.5rem" color="accent">
              Front end team lead
            </Heading>
            <Heading element="h6" size="h5" margin="0">
              383
            </Heading>
          </div>
          <div>
            <Heading element="h6" margin="0" color="whiteSemiTransparent">
              2014-2016
            </Heading>
            <Heading element="h5" size="h4" margin="0.5rem" color="accent">
              Front end developer
            </Heading>
            <Heading element="h6" size="h5" margin="0">
              npower
            </Heading>
          </div>
          <div>
            <Heading element="h6" margin="0" color="whiteSemiTransparent">
              2012-2014
            </Heading>
            <Heading element="h5" size="h4" margin="0.5rem" color="accent">
              Web developer
            </Heading>
            <Heading element="h6" size="h5" margin="0">
              Sixth Story
            </Heading>
          </div>
        </Grid>

        <Grid>
          <div>
            <Heading element="h6" margin="0" color="whiteSemiTransparent">
              2014
            </Heading>
            <Heading element="h5" size="h4" margin="0.5rem" color="accent">
              Contract developer
            </Heading>
            <Heading element="h6" size="h5" margin="0">
              Cellarmasters
            </Heading>
          </div>
          <div>
            <Heading element="h6" margin="0" color="whiteSemiTransparent">
              2013
            </Heading>
            <Heading element="h5" size="h4" margin="0.5rem" color="accent">
              Contract developer
            </Heading>
            <Heading element="h6" size="h5" margin="0">
              Quofore
            </Heading>
          </div>
          <div>
            <Heading element="h6" margin="0" color="whiteSemiTransparent">
              2010-2013
            </Heading>
            <Heading element="h5" size="h4" margin="0.5rem" color="accent">
              Front end developer
            </Heading>
            <Heading element="h6" size="h5" margin="0">
              Kalexiko
            </Heading>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

export default ExperienceSection
