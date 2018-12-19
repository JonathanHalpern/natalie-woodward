import React from 'react'
import { graphql } from 'gatsby'
import Moment from 'react-moment'
import Content, { HTMLContent } from './content'

const project = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>
        <Moment format="MMMM YYYY">{data.frontmatter.startDate}</Moment>-
        <Moment format="MMMM YYYY">{data.frontmatter.endDate}</Moment>
      </p>
      <h1>{data.frontmatter.company}</h1>
      <h3>{data.frontmatter.jobTitle}</h3>

      <HTMLContent content={data.html} />
    </div>
  )
}

export default project
