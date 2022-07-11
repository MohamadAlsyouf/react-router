import { Link, useMatch, useResolvedPath } from "react-router-dom"
// useMatch allows us to compare the current path we are one to whatever
// path we want.
// useResolvedPath allows us to take a relative or absolute path, combines it
// with current path im on, and gives me the full path that i'm accessing.

export default function Navbar() {

  return (
    <nav className="nav">
      <Link to="/" className="site-title">Site Name</Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}
