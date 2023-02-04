import React from "react";
import Aboutme from "../section/Aboutme";
import Contact from "../section/Contact";
import Footer from "../section/Footer";
import Myproject from "../section/Myproject";
import Navigation from "../section/Navigation";
import Profile from "../section/Profile";
import Technology from "../section/Technology";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="md:px-20">
        <Profile />
        <Aboutme />
        <Technology />
        <Myproject />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
