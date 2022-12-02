import React from "react";
import Nav from "./Nav";

function LayoutProduct({ children }) {
  return (
    <div className="w-full mx-auto relative">
      <Nav />
      {children}
    </div>
  );
}

export default LayoutProduct;
