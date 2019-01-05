import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// import styled from 'styled-components'

import styled from '@emotion/styled'
import { css, jsx, Global } from '@emotion/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// const buttonStyles = css`
//   background: red !important;
//   color: blue !important;
// `

// function EmotionButton() {
//   return (
//     <div>
//       <Button>Material-UI</Button>
//       <Button className={buttonStyles}>Emotion</Button>
//     </div>
//   )
// }

export interface PassedProps {
  siteTitle: string
}

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

const StyledButton = styled(Button)`
  background: red !important;
  color: green !important;
`

const Buttoon = styled.div`
  background: red !important;
`

const Header = ({ siteTitle }: PassedProps) => (
  <AppBar position="static">
    <Toolbar>
      <div>
        <Typography variant="h6" color="inherit">
          {siteTitle}
        </Typography>
      </div>
      <div>
        {/* <Buttoon>
          <p>This is a hotpink button.</p>
        </Buttoon> */}
        <Button color="inherit" component={Link} to="/">
          cv
        </Button>
        <Button variant="contained">Default</Button>
        <Button color="inherit" component={Link} to="/blog">
          blog
        </Button>
      </div>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
