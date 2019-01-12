import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'

const Title = styled.h1`
  text-align: center;
`

type PassedProps = {
  text: string
}

export default ({ text }: PassedProps) => (
  <div>
    <Title>{text}</Title>
    <Divider />
  </div>
)
