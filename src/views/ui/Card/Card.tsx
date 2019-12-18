import * as React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  text: string
}

export const Card = ({ title, text }: Props): JSX.Element => (
  <CardWrapper>
    <h3>{title}</h3>
    <p>{text}</p>
  </CardWrapper>
)

const CardWrapper = styled.div`
  border: 1px solid var(--color-primary);
  background-color: var(--color-text);
  display: grid;
  padding: 2rem;
  height: 100px;
  width: 100px;
  align-content: center;
  justify-content: center;
`
