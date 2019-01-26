import React, { FC } from 'react'
import styled from '@emotion/styled'

const BackgroundTiles = styled.div`
  background-image: url('img/white-waves.png');
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
`

const Background: FC = ({ children }) => (
  <BackgroundTiles>{children}</BackgroundTiles>
)

export default Background
