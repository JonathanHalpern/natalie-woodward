import React, { FC } from 'react'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'

const StyledH1 = styled.h1`
  text-align: center;
`

const Container = styled.div`
  margin-bottom: 15px;
`

type Props = {
  text: string
}

const Title: FC<Props> = ({ text }) => (
  <Container>
    <StyledH1>{text}</StyledH1>
    <Divider />
  </Container>
)

export default Title
