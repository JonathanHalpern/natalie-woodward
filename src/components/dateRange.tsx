import React from 'react'
import styled from '@emotion/styled'
import Moment from 'react-moment'

const Container = styled.p`
  font-style: italic;
  margin: 0 0 5px 0;
`

type PassedProps = {
  startDate?: string
  endDate?: string
  dateFormat?: string
}

export default ({
  startDate,
  endDate,
  dateFormat = 'MMMM YYYY',
}: PassedProps) => (
  <Container>
    <Moment format={dateFormat}>{startDate || endDate}</Moment>
    {!endDate && ' - present'}
    {startDate && endDate && (
      <span>
        {' '}
        - <Moment format={dateFormat}>{endDate}</Moment>
      </span>
    )}
  </Container>
)
