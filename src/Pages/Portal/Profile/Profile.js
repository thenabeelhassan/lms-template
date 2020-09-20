import React from "react";

import { Navbar } from "../Components/Header/Navbar";
import { Footer } from "../Components/Footer/Footer";

export const Profile = () => {
  return (
    <section className="portal">
      <Navbar />
      <main>
        <h2>Profile Page</h2>
      </main>
      <Footer />
    </section>
  );
};
