import React from 'react'
import Moment from 'react-moment'

export type ContactProps = {
  frontmatter: {
    email: string
    mobile: string
    address: string
    dateOfBirth: string
    linkedIn: string
  }
}

type PassedProps = {
  data: ContactProps
}

export default ({ data }: PassedProps) => (
  <div>
    <p>
      Date of Birth:{' '}
      <Moment format="DD/MM/YYYY">{data.frontmatter.dateOfBirth}</Moment>
    </p>
    <p>
      Email:{' '}
      <a href={`mailto:${data.frontmatter.email}`} target="blank">
        {data.frontmatter.email}
      </a>
    </p>
    <p>Mobile: {data.frontmatter.mobile}</p>
    <p>Address: {data.frontmatter.address}</p>
    <p>
      <a href={data.frontmatter.linkedIn} target="blank">
        Linked In
      </a>
    </p>
  </div>
)
