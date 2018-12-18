import React from 'react'

export interface Props {
  content: string
  className?: string
}

export default ({ content, className }: Props) => (
  <div className={className}>{content}</div>
)
export const HTMLContent = ({ content, className }: Props) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)
