import React, { useContext, useState } from "react";
import context_products from "./context/Context_products";

function Products_details() {
  const [quantity, setQuantity] = useState(1);
  const context = useContext(context_products);
  const productName = "Fall Limited Edition Sneakers";
  const productPrice = 125.0;
  const productThumb = 1;

  return (
    <article className="w-full md:w-full mt-6 lg:mt-0 lg:w-[445px] text-sm font-bold px-4 lg:p-0">
      <h2 className="tracking-wider uppercase text-orange text-sm" role={"heading"}>
        Sneaker Company
      </h2>
      <h1
        className={`lg:text-[44px] text-[28px] leading-8 tracking-wide lg:leading-[48px] font-bolder mt-4 lg:mt-5`}
      >
        {productName}
      </h1>
      <p className="text-sm sm:text-base font-light leading-7 mt-4 lg:mt-9 tracking-[4%] sm:tracking-normal text-grayish-blue" role={"contentinfo"}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="flex items-center justify-between md:block">
        <p className="text-[30px] leading-[26px] mt-7 items-center w-fit">
          ${productPrice}
          {""}
          <span className="rounded-md bg-pale-orange align-top text-orange text-base px-2.5 p-1 ml-4">
            50%
          </span>
        </p>
        <s className="text-base leading-7 mt-2">$250.00</s>
      </div>

      <div className="btn-group flex flex-col md:flex-row gap-4 mt-7 lg:mt-8">
        <div
          className={`bg-light-grayish-blue rounded-[10px] w-full md:w-fit h-14 flex items-center justify-between md:justify-center`}
        >
          <button
            type="button"
            className="h-[90%] aspect-square hover:opacity-50 flex justify-center items-center cursor-pointer"
            aria-label="click to decrease the quantity of product"
            onClick={() => quantity !== 1 && setQuantity(quantity - 1)}
            id="decrease-item"
          >
            <svg
              width="12"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
              className="scale-75 origin-center"
              aria-labelledby="decrease-item"
            >
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                id="a"
                fill="#FF7E1B"
              />
            </svg>
          </button>
          <span className="h-full aspect-square flex items-center justify-center text-base">
            {quantity}
          </span>
          <button
            type="button"
            className="h-[90%] aspect-square hover:opacity-50 flex justify-center items-center cursor-pointer"
            aria-label="click to increase the quantity of product"
            onClick={() => setQuantity(quantity + 1)}
            id={"increase-item"}
          >
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              className="scale-75 origin-center"
              aria-labelledby="increase-item"
            >
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                id="b"
                fill="#FF7E1B"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="text-white w-full gap-4 flex text-base rounded-[10px] h-14 items-center justify-center bg-orange shadow-lg hover:opacity-50"
          id="add-to-cart"
          onClick={() => {
            context.setProductDetail((item) => [
              {
                id: 1,
                name: productName,
                price: productPrice,
                quantity,
                img: productThumb,
              },
            ]);
          }}
        >
          {" "}
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-75"
            aria-labelledby="add-to-cart"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default Products_details;
