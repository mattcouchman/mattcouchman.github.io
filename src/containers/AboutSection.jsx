import React, { Fragment } from "react"
import Section from "../components/Section"
import Container from "../components/Container"
import Grid from "../components/Grid"
import Heading from "../components/Heading"
import Text from "../components/Text"
import libraries from "../data/libraries"
import skills from "../data/skills"
import tools from "../data/tools"

const AboutSection = () => {
  const pageData = [
    {
      title: "Skills",
      data: skills,
    },
    {
      title: "Libraries",
      data: libraries,
    },
    {
      title: "Tools",
      data: tools,
    },
  ]
  return (
    <Section>
      <Container>
        <Grid>
          <div>
            <Text size="lg">
              I'm a front end developer with around 10 years professional
              experience. Starting out in 2010 as a designer/front end
              developer, I cut my teeth wrestling Photoshop designs into IE6.
            </Text>
            <Text>
              I've held several roles over the years at a range of companies,
              from small agencies to national brands in both the UK and
              Australia.
            </Text>
            <Text>
              For the past 4 years my main focus has been on developing design
              systems and building React applications.
            </Text>
            <Text>
              Currently front end engineering team lead at <a href="">383</a>.
            </Text>
          </div>
          <div>
            <Heading element="h4" size="h5">
              Some of the tools of my trade...
            </Heading>
            {pageData.map(({ title, data }) => (
              <Fragment>
                {data.map(({ id, name }) => (
                  <img
                    style={{
                      display: "inline-block",
                      width: "5rem",
                      marginRight: "2rem",
                      marginBottom: "2rem",
                      verticalAlign: "middle",
                    }}
                    src={require(`../images/logos/${id}.svg`)}
                    alt={name}
                    title={name}
                  />
                ))}
              </Fragment>
            ))}
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

export default AboutSection
