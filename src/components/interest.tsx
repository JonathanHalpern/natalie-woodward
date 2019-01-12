import React from 'react'
import Moment from 'react-moment'
import Content from './content'

export type InterestType = {
  frontmatter: {
    startDate: string
    endDate: string
  }
  html: string
  id: string
}

type PassedProps = {
  data: InterestType
}

const interest = ({ data }: PassedProps) => (
  <div>
    <p>
      <Moment format="YYYY">{data.frontmatter.startDate}</Moment>-
      <Moment format="YYYY">{data.frontmatter.endDate}</Moment>
    </p>
    <Content content={data.html} />
  </div>
)

export default interest
