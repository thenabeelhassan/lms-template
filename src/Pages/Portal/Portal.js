import React from "react";

import "./Portal.css";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Header/Navbar";

export const Portal = () => {
  return (
    <section className="portal">
      <Navbar />
      <main>
        <h2>Portal Page</h2>
      </main>
      <Footer />
    </section>
  );
};
