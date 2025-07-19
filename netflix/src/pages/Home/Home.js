import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Banner from "../../banner/banner";
import RowList from "../../Components/Rows/RowList/RowList";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
