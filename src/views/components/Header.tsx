import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  //@ts-ignore
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

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
    {links.map(({ href, label }) => (
      <Link key={href} href={href}>
        <a style={linkStyle}>{label}</a>
      </Link>
    ))}
  </nav>
)

export default Header
