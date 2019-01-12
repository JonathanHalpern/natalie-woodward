import React from 'react'
import Img from 'gatsby-image'
import { GatsbyImageProps } from 'gatsby-image'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'
import Content from './content'
import Title from './title'
import Navigation from '../containers/navigation'

const StyledImg = styled(Img)`
  width: 200px;
  border-radius: 50%;
  margin: 10px auto;
`

export type Bio = {
  frontmatter: {
    title: string
    name: string
  }
  html: string
}

type PassedProps = {
  data: Bio
  image: {
    childImageSharp: GatsbyImageProps
  }
}

export default ({ data, image }: PassedProps) => (
  <div>
    <Title text={data.frontmatter.name} />
    <StyledImg fluid={image.childImageSharp.fluid} />
    <Divider />
    <p>{data.frontmatter.title}</p>
    <Content content={data.html} />

    <Navigation />
  </div>
)
