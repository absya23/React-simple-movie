import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header></Header>
      {/* là những cái nested route bên trong thằng Main */}
      <Outlet></Outlet>
    </>
  );
};

export default Main;
