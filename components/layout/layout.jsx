import React from "react";
import { MainNavigation } from "./main-navigation";

export const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};
