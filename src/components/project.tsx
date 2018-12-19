import React from 'react'
import Moment from 'react-moment'
import Content, { HTMLContent } from './content'
import Chip from '@material-ui/core/Chip'

const project = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>
        <Moment format="MMMM YYYY">{data.frontmatter.startDate}</Moment>-
        <Moment format="MMMM YYYY">{data.frontmatter.endDate}</Moment>
      </p>
      <h1>{data.frontmatter.institution}</h1>
      <h3>{data.frontmatter.title}</h3>
      {data.frontmatter.skills &&
        data.frontmatter.skills.map(skill => (
          <Chip key={skill} label={skill} />
        ))}
      <HTMLContent content={data.html} />
    </div>
  )
}

export default project
