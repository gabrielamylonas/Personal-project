import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">About</CustomLink>
        <CustomLink to="/family">Family</CustomLink>
        <CustomLink to="/resume">Resume</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active section" : "section"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
