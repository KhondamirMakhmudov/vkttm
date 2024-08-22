import React from "react";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Footer from "@/components/footer";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <Menu />
      <main className="content__min_h ">{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
