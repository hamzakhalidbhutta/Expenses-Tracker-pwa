import React from "react";
import Header from "../Components/Header";
import Amount from "../Components/Amount";
import Transections from "../Components/Transections";
import EnterTransections from "../Components/EnterTransections";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Amount />
      <Transections />
      <EnterTransections />
    </div>
  );
};

export default Home;
