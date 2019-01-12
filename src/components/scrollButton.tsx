import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import Button from '@material-ui/core/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const StyledButton = styled(Button)``

type PassedProps = {
  href: string
  text: string
}

export default ({ text, href }: PassedProps) => (
  <StyledButton component={AnchorLink} offset="15" href={href}>
    {text}
  </StyledButton>
)
