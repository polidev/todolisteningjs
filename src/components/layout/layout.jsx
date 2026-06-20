import { Link } from "react-router";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <main className="layout">
      <nav className="nav">
        <Link to="/">Todo List</Link>
        <Link to="/shopping">Shopping List</Link>
      </nav>
      <div className="main">{children}</div>
    </main>
  );
}
