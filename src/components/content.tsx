import React, { FC } from 'react'

type Props = {
  content: string
  className?: string
}
const Content: FC<Props> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)
export default Content
