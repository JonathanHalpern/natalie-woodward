import React from 'react'
import Moment from 'react-moment'
import Content, { HTMLContent } from './content'

const interest = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>
        <Moment format="YYYY">{data.frontmatter.startDate}</Moment>-
        <Moment format="YYYY">{data.frontmatter.endDate}</Moment>
      </p>
      <HTMLContent content={data.html} />
    </div>
  )
}

export default interest
