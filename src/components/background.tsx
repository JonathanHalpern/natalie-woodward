import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

type PassedProps = {
  children: ReactNode
}

const BackgroundTiles = styled.div`
  background-image: url('img/white-waves.png');
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
`

export default ({ children }: PassedProps) => (
  <BackgroundTiles>{children}</BackgroundTiles>
)
