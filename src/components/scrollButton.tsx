import React from 'react'
import styled from '@emotion/styled'
import Button from '@material-ui/core/Button'
import { Link } from 'react-scroll'

type PassedProps = {
  href: string
  text: string
}

const MyLink = props => (
  <Link
    activeClass="active"
    className="test1"
    to="{href}"
    spy={true}
    smooth={true}
    duration={500}
  />
)

export default ({ text, href }: PassedProps) => (
  <Button key={href}>
    <Link
      activeClass="active"
      to={href}
      spy={true}
      smooth={true}
      duration={500}
    >
      {text}
    </Link>
  </Button>
)
