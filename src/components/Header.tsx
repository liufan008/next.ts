import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
}

const Header = (): JSX.Element => (
  <nav>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/stars">
      <a style={linkStyle}>Stars</a>
    </Link>
  </nav>
)

export default Header
