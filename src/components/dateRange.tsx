import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import Moment from 'react-moment'

const Container = styled.p`
  font-style: italic;
  margin: 0 0 5px 0;
`

type PassedProps = {
  startDate: string
  endDate: string
}

export default ({ startDate, endDate }: PassedProps) => (
  <Container>
    <Moment format="MMMM YYYY">{startDate}</Moment>
    &nbsp;-&nbsp;
    <Moment format="MMMM YYYY">{endDate}</Moment>
  </Container>
)
