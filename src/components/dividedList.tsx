import React from 'react'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'
import Title from './title'

type EdgeType = {
  node: {
    id: string
  }
}

type PassedProps = {
  title: string
  edges: Array<EdgeType>
  Component: any
}

type DividerProps = {
  variant: 'inset' | 'middle' | 'fullWidth'
}

const StyledDivider = styled(Divider)<DividerProps>`
  margin: 20px auto 20px;
  width: 50%;
`

export default ({ title, edges, Component }: PassedProps) => (
  <div>
    <Title text={title} />
    {edges.map((edge: EdgeType, index: number) => (
      <div key={edge.node.id}>
        <Component data={edge.node} />
        {index !== edges.length - 1 && <StyledDivider variant="middle" />}
      </div>
    ))}
  </div>
)
