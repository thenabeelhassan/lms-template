import React from "react";

import "./Home.css";
import { Navbar } from "./Components/Header/Navbar";
import { Footer } from "./Components/Footer/Footer";

export const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <main>
        <h1>Brand Name</h1>
      </main>
      <Footer />
    </section>
  );
};
