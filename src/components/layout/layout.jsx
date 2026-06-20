import { NavLink } from "react-router";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <main className="layout">
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "isActive" : "")}
        >
          Todo List
        </NavLink>
        <NavLink
          to="/shopping"
          className={({ isActive }) => (isActive ? "isActive" : "")}
        >
          Shopping List
        </NavLink>
      </nav>
      <div className="main">{children}</div>
    </main>
  );
}
