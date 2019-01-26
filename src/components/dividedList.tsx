import React, { FC } from 'react'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'
import Title from './title'

type EdgeType = {
  node: {
    id: string
  }
}

type Props = {
  title: string
  edges: EdgeType[]
  Component: any
}

type DividerProps = {
  variant: 'inset' | 'middle' | 'fullWidth'
}

const StyledDivider = styled(Divider)<DividerProps>`
  margin: 20px auto 20px;
  width: 50%;
`

const DividedList: FC<Props> = ({ title, edges, Component }) => (
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
export default DividedList
