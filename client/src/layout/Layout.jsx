import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Header } from "../components/Header"

export const Layout = () => {
  // const [isSelected, setIsSelected] = useState("1");
  
  return (
    <div className="min-h-screen flex flex-col overflow-auto">
      <NavBar />
      <Header />
        <main className="
          min-[1880px]:px-96
          lg:px-16
          md:px-6 md:pb-2 px-6 pt-12">
          <Outlet />
        </main>           
  </div>
  );
};
