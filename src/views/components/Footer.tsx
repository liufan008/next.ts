import styled from 'styled-components'

const Footer = (): JSX.Element => (
  <FooterGroup>
    <Text>Im here to stay</Text>
  </FooterGroup>
)

export default Footer

const FooterGroup = styled.div`
  display: grid;
  padding: 50px 0;
  background: var(--color-primary-lighter);
`
const Text = styled.p`
  color: var(--text-color);
  text-align: center;
`
