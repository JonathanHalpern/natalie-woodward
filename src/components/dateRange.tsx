import React, { FC } from 'react'
import styled from '@emotion/styled'
import Moment from 'react-moment'

const Container = styled.p`
  font-style: italic;
  margin: 0 0 5px 0;
`

type Props = {
  startDate?: string
  endDate?: string
  dateFormat?: string
}

const DateRange: FC<Props> = ({
  startDate,
  endDate,
  dateFormat = 'MMMM YYYY',
}) => (
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
export default DateRange
