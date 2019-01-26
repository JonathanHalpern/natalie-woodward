import React, { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import FontAwesome from 'react-fontawesome'

const Link = styled.a`
  color: #3f51b5;
  :visited {
    color: #3f51b5;
  }
`

const Icon = styled(FontAwesome)`
  color: #3f51b5;
`

type Props = {
  iconName: string
  href?: string
  text?: string
  className?: string
  component?: ReactNode
}

const IconLink: FC<Props> = ({
  iconName,
  href,
  text,
  className,
  component,
}) => (
  <Link href={href} className={className ? className : ''}>
    <Icon name={iconName} fixedWidth />: <span>{text}</span>
    {component}
  </Link>
)

export default IconLink
