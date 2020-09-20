import React from "react";

import { Link } from "react-router-dom";

import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Header/Navbar";

export const Login = () => {
  return (
    <section className="home">
      <Navbar />
      <main>
        <h2>Login Page</h2>
        <Link to="/portal">Open Portal</Link>
      </main>
      <Footer />
    </section>
  );
};
