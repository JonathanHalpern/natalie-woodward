import React from 'react'
import Content from './content'
import Chip from '@material-ui/core/Chip'
import DateRange from './dateRange'
import styled from '@emotion/styled'

type SkillChipProps = {
  key: string
  label: string
}

export type ProjectType = {
  frontmatter: {
    title: string
    institution: string
    startDate: string
    endDate: string
    skills: Array<string>
  }
  html: string
  id: string
}

type PassedProps = {
  data: ProjectType
}

const SkillChip = styled(Chip)<SkillChipProps>`
  margin: 5px;
`

export default ({ data }: PassedProps) => (
  <div>
    <h2>
      {data.frontmatter.institution} - {data.frontmatter.title}
    </h2>
    <DateRange
      startDate={data.frontmatter.startDate}
      endDate={data.frontmatter.endDate}
    />
    {data.frontmatter.skills &&
      data.frontmatter.skills.map((skill: string) => (
        <SkillChip key={skill} label={skill} />
      ))}
    <Content content={data.html} />
  </div>
)
