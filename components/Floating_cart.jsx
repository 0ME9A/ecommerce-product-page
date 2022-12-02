import React, { useContext } from "react";
import context_products from "./context/Context_products";
import Floating_cart_item from "./Floating_cart_item";

function Floating_cart() {
  const context = useContext(context_products);
  return (
    <div
      className={`w-full sm:w-fit absolute right-0 top-[70px] sm:right-[0%] z-20 p-2 lg:top-[90px] fade-in`}
    >
      <div className="rounded-lg shadow-lg w-full bg-white min-h-[254px] sm:w-[360px]">
        <header className={`h-[68px] border-b-2 pl-6 grid items-center`}>
          <h2 className={`font-bold`}>Cart</h2>
        </header>
        {context.productDetail.length > 0 ? (
          <div className="py-3 min-h-[190px] h-full relative">
            {context.productDetail.map((item) => (
              <Floating_cart_item
                key={Math.random() * 5000}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
            <div className="px-6 py-3">
              <button
                type="button"
                className="flex items-center justify-center gap-4 h-14 border w-full rounded-lg bg-orange text-white font-bold shadow-lg tracking-widest hover:opacity-50"
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-grayish-blue tracking-wider w-full  justify-center flex items-center rounded-lg h-[190px] ">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
}

export default Floating_cart;
