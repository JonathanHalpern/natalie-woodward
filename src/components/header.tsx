import { Link } from 'gatsby'
import React, { ReactNode, FC } from 'react'

import styled from '@emotion/styled'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

type ToolbarProps = {
  children: ReactNode
}

interface Props {
  siteTitle: string
}

const StyledToolbar = styled(Toolbar)<ToolbarProps>`
  display: flex;
  justify-content: space-between;
`

const Header: FC<Props> = ({ siteTitle }) => (
  <AppBar position="static">
    <StyledToolbar>
      <div>
        <Typography variant="h6" color="inherit">
          {siteTitle}
        </Typography>
      </div>
      {/* <div>
        <Button color="inherit" {...{ component: Link, to: `/` } as any}>
          cv
        </Button>
        <Button color="inherit" {...{ component: Link, to: `/blog` } as any}>
          blog
        </Button>
      </div> */}
    </StyledToolbar>
  </AppBar>
)

export default Header
