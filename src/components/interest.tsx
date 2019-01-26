import React, { FC } from 'react'
import DateRange from './dateRange'
import Content from './content'
import styled from '@emotion/styled'

const StyledContent = styled(Content)`
  p {
    margin: 0;
  }
`

export type InterestType = {
  frontmatter: {
    startDate: string
    endDate: string
  }
  html: string
  id: string
}

type Props = {
  data: InterestType
}

const Interest: FC<Props> = ({ data }) => (
  <div>
    <DateRange
      startDate={data.frontmatter.startDate}
      endDate={data.frontmatter.endDate}
      dateFormat="YYYY"
    />
    <StyledContent content={data.html} />
  </div>
)

export default Interest
