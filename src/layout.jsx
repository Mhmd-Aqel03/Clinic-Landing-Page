import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/navBar.jsx";
import Footer from "./components/footer.jsx";

const MainLayout = () => {
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  );
};

export default MainLayout;