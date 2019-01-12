import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'

const Title = styled.h1`
  text-align: center;
`

const Container = styled.div`
  margin-bottom: 15px;
`

type PassedProps = {
  text: string
}

export default ({ text }: PassedProps) => (
  <Container>
    <Title>{text}</Title>
    <Divider />
  </Container>
)
