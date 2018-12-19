import React from 'react'
import Moment from 'react-moment'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Content, { HTMLContent } from './content'

const StyledImg = styled(Img)`
  width: 300px;
  border-radius: 50%;
`

export default ({ data, image }) => {
  console.log(data, image)
  return (
    <div>
      <h1>{data.frontmatter.name}</h1>
      <StyledImg fluid={image.childImageSharp.fluid} />
      <p>{data.frontmatter.title}</p>
      <p>
        DOB: <Moment format="DD/MM/YYYY">{data.frontmatter.dateOfBirth}</Moment>
      </p>
      <p>Email: {data.frontmatter.email}</p>
      <p>Mobile: {data.frontmatter.mobile}</p>
      <p>Address: {data.frontmatter.address}</p>
      <HTMLContent content={data.html} />
    </div>
  )
}
