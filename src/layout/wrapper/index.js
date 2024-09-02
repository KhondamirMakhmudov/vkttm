import React from "react";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import MenuComponent from "@/components/menuData";

const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      <MenuComponent />
      <main className=" content__min_h ">{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
