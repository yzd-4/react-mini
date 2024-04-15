import React from "react";
import "./RootLayout.scss";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
