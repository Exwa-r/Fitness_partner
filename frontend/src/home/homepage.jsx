import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Components from "./components";
import Footer from "./footer";
export default function Homepage() {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex flex-col">
          <Header />
          <Components />
          <Footer />
        </div>
      </div>
    </>
  );
}
