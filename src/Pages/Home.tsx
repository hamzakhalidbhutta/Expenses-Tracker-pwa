import React from "react";
import Header from "../Components/Header";
import Transections from "../Components/Transections";
import EnterTransections from "../Components/EnterTransections";
import Balance from "../Components/Balance";

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <Header />
      <Balance />
      <Transections />
      <EnterTransections />
    </div>
  );
};

export default Home;
