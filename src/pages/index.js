import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Text from "../components/Text"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Container from "../components/Container"
import Grid from "../components/Grid"
import AboutSection from "../containers/AboutSection"
import ExperienceSection from "../containers/ExperienceSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AboutSection />
      <ExperienceSection />
    </Layout>
  )
}

export default IndexPage
