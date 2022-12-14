import Head from "next/head";
import React from "react";
import LayoutProduct from "../components/Layout_product";
import ProductPage from "../components/ProductPage";

function Index(props) {
  return (
    <>
      <Head>
        <title>E-commerce product page</title>
      </Head>
      <LayoutProduct>
        <ProductPage />
      </LayoutProduct>
    </>
  );
}

export default Index;
