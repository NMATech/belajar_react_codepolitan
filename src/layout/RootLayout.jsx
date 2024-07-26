import { NavLink, Outlet } from "react-router-dom";
import "../css/index.css";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
        style={{
          marginRight: "5px",
          borderRadius: "5px",
          padding: "5px",
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
        style={{
          marginRight: "5px",
          borderRadius: "5px",
          padding: "5px",
        }}
        to="/blog"
      >
        Blog
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
        style={{
          marginRight: "5px",
          borderRadius: "5px",
          padding: "5px",
        }}
        to="/about"
      >
        About
      </NavLink>
      <Outlet />
    </>
  );
}

export default RootLayout;
