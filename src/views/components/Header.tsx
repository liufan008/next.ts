import Link from 'next/link'
import styled from 'styled-components'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  //@ts-ignore
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Header = (): JSX.Element => (
  <Nav>
    <Link href="/">
      <StyledLink>Home</StyledLink>
    </Link>
    <Link href="/about">
      <StyledLink>About</StyledLink>
    </Link>
    <Link href="/stars">
      <StyledLink>Stars</StyledLink>
    </Link>
    {links.map(({ href, label }) => (
      <Link key={href} href={href}>
        <StyledLink href={href}>{label}</StyledLink>
      </Link>
    ))}
  </Nav>
)

export default Header

const Nav = styled.nav`
  width: 100%;
  text-align: center;
  padding: 50px 0;
`
const StyledLink = styled.a`
  color: var(--link-color);
  margin-right: 15px;
  padding: 24px;
  text-decoration: none;
  visited {
    text-decoration: none;
  }
`
