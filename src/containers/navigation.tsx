import React from 'react'
import styled from '@emotion/styled'
import ScrollButton from '../components/scrollButton'

const Container = styled.div`
  list-style: none;
`

const nav = [
  {
    href: 'projects',
    text: 'Employment',
  },
  {
    href: 'education',
    text: 'Education',
  },
  {
    href: 'interests',
    text: 'Interests',
  },
  {
    href: 'contact',
    text: 'Contact',
  },
]
export default () => (
  <Container>
    {nav.map(item => (
      <ScrollButton href={item.href} text={item.text} />
    ))}
  </Container>
)
