import * as React from 'react'

interface ButtonProps {
  children: string
}

export const Button = ({ children }: ButtonProps): JSX.Element => (
  <button>{children}</button>
)
