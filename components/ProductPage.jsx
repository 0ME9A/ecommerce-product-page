import React, { useState } from "react";
import Products_details from "./Product_details";
import Product_view from "./Product_view";
import Products_view_flote from "./Product_view_flote";

function ProductPage() {
  const [zoomin, setZoomin] = useState(false);

  return (
    <>
      <div className="max-w-[1018px] mx-auto grid md:grid-flow-col justify-center items-center sm:mt-6 md:mt-[91px] p-0 sm:px-6 md:gap-6 lg:gap-[126px] flex-shrink-0">
        <Product_view setZoomin={setZoomin} />
        <Products_details />
      </div>
      {zoomin && <Products_view_flote setZoomin={setZoomin} />}
      <div className="py-5"></div>
    </>
  );
}

export default ProductPage;
