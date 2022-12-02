import Image from "next/image";
import React, { useContext } from "react";
import context_products from "./context/Context_products";

function Floating_cart_item({ id, name, price, quantity }) {
  const context = useContext(context_products);
  return (
    <div
      className="w-full flex items-start hover:bg-slate-50 gap-4 p-6 py-3 overflow-auto"
      aria-label="cart-item (dynamic)"
    >
      <Image
        src={"/assets/images/image-product-1.jpg"}
        alt={"product image"}
        width={50}
        height={50}
        className={`rounded-md`}
      />
      <div className="title-prize text-grayish-blue justify-self-start w-full ">
        <h2 className="truncate overflow-hidden w-[200px]">{name}</h2>
        <p>
          ${price}.00 x {quantity}{" "}
          <strong className="text-very-dark-blue">
            ${price * quantity}.00
          </strong>
        </p>
      </div>

      <button
        type="button"
        aria-label="remove cart item"
        className="self-center flex-shrink-0 hover:scale-110 "
        onClick={() => {
          context.setProductDetail([]);
        }}
      >
        <Image
          src={"/assets/svg/icon-delete.svg"}
          alt="delete-cart-item"
          width={14}
          height={16}
        />
      </button>
    </div>
  );
}

export default Floating_cart_item;
