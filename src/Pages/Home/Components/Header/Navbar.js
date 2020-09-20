import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="home">
      <section className="col-3 navItem">
        <Link to="/" className="link">
          <h4>(BRAND NAME)</h4>
        </Link>
      </section>
      <section className="col-2 navItems">
        <Link to="/aboutus" className="link">
          About Us
        </Link>
      </section>
      <section className="col-2 navItems">
        <Link to="/contactus" className="link">
          Contact Us
        </Link>
      </section>
      <section className="col-2 navItems">
        <Link to="/register" className="link">
          Register
        </Link>
      </section>
      <section className="col-2 navItems">
        <Link to="/login" className="link">
          Login
        </Link>
      </section>
    </header>
  );
};
