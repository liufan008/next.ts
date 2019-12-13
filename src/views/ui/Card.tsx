import * as React from 'react'

interface Props {
  title: string
  text: string
}

export const Card = ({ title, text }: Props): JSX.Element => (
  <div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)
