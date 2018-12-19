import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export interface PassedProps {
  siteTitle: string
}

const StyledToolbar = styled(Toolbar)`
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
        <Button color="inherit" component={Link} to="/">
          cv
        </Button>
        <Button
          color="inherit"
          component={props => <Link {...props} to="/blog" />}
        >
          blog
        </Button>
      </div>
    </StyledToolbar>
  </AppBar>
  // <div
  //   style={{
  //     background: 'rebeccapurple',
  //     marginBottom: '1.45rem',
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: '0 auto',
  //       maxWidth: 960,
  //       padding: '1.45rem 1.0875rem',
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: 'white',
  //           textDecoration: 'none',
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
