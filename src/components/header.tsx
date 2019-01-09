import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { ReactNode } from 'react'

import styled from '@emotion/styled'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

type ToolbarProps = {
  children: ReactNode
}

export interface PassedProps {
  siteTitle: string
}

const StyledToolbar = styled(Toolbar)<ToolbarProps>`
  display: flex;
  justify-content: space-between;
`

const Header = ({ siteTitle }: PassedProps) => (
  <AppBar position="static">
    <StyledToolbar>
      <div>
        <Typography variant="h6" color="inherit">
          {siteTitle}
        </Typography>
      </div>
      <div>
        <Button color="inherit" {...{ component: Link, to: `/` } as any}>
          cv
        </Button>
        <Button color="inherit" {...{ component: Link, to: `/blog` } as any}>
          blog
        </Button>
      </div>
    </StyledToolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
