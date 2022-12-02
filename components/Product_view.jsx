import Image from "next/image";
import React, { useState } from "react";

function Product_view({ setZoomin }) {
  const [activeProductImage, setActiveProductImage] = useState(1);
  const list = [1, 2, 3, 4];
  return (
    <div className="w-full md:w-[350px] lg:w-[445px] flex-shrink-0 relative">
      <Image
        src={`/assets/images/image-product-${activeProductImage}.jpg`}
        alt={`active-product-image`}
        width={445}
        height={445}
        className={`sm:rounded-2xl w-full h-[80vw] md:h-auto object-cover bg-slate-700 cursor-zoom-in`}
        onClick={() => setZoomin(true)}
      />

      <button
        type="button"
        className="absolute top-1/2 left-4 w-[40px] aspect-square rounded-full bg-white flex items-center justify-center rotate-180 md:hidden"
        onClick={() => {
          activeProductImage > 1 &&
            setActiveProductImage(activeProductImage - 1);
        }}
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="4"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 w-[40px] aspect-square rounded-full bg-white flex items-center justify-center md:hidden"
        onClick={() => {
          activeProductImage < 4 &&
            setActiveProductImage(activeProductImage + 1);
        }}
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="4"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>

      <div className="product-image-list hidden md:flex justify-center gap-8 mt-[30px]">
        {list.map((item) => {
          return (
            <div
              key={Math.random() * 50}
              className={`border-2 border-transparent rounded-[10px] overflow-hidden cursor-pointer ${
                activeProductImage === item && "border-orange"
              }`}
            >
              <Image
                src={`/assets/images/image-product-${item}-thumbnail.jpg`}
                alt={`active-product-image`}
                width={88}
                height={88}
                className={`hover:opacity-50 ${
                  activeProductImage === item && "opacity-20"
                }`}
                onClick={() => setActiveProductImage(item)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product_view;
