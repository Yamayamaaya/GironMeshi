import React from 'react'

export const lineBreaks = (text?: string) => {
  if (!text) return null
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))
}
