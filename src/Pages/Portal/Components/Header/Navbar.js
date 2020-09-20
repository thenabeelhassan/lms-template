import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <section className="col-3 navItem">
        <Link to="/portal" className="link">
          <h4>Portal</h4>
        </Link>
      </section>
      <section className="col-3 navItems">
        <Link to="/courses" className="link">
          Courses
        </Link>
      </section>
      <section className="col-3 navItems">
        <Link to="/profile" className="link">
          Profile
        </Link>
      </section>
      <section className="col-3 navItems">
        <Link to="/" className="link">
          Logout
        </Link>
      </section>
    </header>
  );
};
