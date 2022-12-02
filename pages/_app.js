import "../styles/globals.css";
import context_products from "../components/context/Context_products";
import { useState } from "react";
import { Kumbh_Sans } from "@next/font/google";
const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }) {
  const [productDetail, setProductDetail] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <context_products.Provider
      value={{
        productDetail,
        setProductDetail,
        totalQuantity,
        setTotalQuantity,
      }}
    >
      <main className={kumbh.className}>
        <Component {...pageProps} />
      </main>
    </context_products.Provider>
  );
}

export default MyApp;
