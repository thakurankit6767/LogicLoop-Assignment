import React from "react";
import { Route, Routes } from "react-router-dom";
import Games from "../pages/GamePage/Games";
import Contact from "../pages/contactPage/Contact";
import Header from "../components/header/Header";

const AllRoutes = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Games />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
