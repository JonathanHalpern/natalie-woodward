import React from 'react'

type InputProps = {
  content: string
  className?: string
}

export default ({ content, className }: InputProps) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)
