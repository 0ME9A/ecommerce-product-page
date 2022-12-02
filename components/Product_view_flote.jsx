import React, { useState } from "react";
import Image from "next/image";

function Products_view_flote({ setZoomin }) {
  const [activeProductImage, setActiveProductImage] = useState(1);
  const list = [1, 2, 3, 4];
  return (
    <div className="hidden w-full h-screen bg-black/75 absolute top-0 z-40 lg:flex items-center fade-in">
      <div className="w-full md:w-[350px] lg:w-full lg:max-w-[550px] flex-shrink-0 relative mx-auto">
        <button
          type="button"
          aria-label="close product preview"
          className="float-right mb-6 cursor-pointer relative z-10 hover:scale-110"
          onClick={() => setZoomin(false)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.2225 0L21.5571 3.33457L14.3316 10.5553L21.5555 17.7791L18.2209 21.1137L11.0002 13.8883L3.7795 21.1121L0.444931 17.7776L7.66565 10.5569L0.443359 3.33457L3.77793 0L10.9986 7.22229L18.2225 0Z"
              fill="#FF7D1A"
            />
          </svg>
        </button>
        <div className="relative">
          <Image
            src={`/assets/images/image-product-${activeProductImage}.jpg`}
            alt={`active-product-image`}
            width={550}
            height={550}
            className={`sm:rounded-2xl`}
          />

          <button
            type="button"
            className="absolute top-[50%] translate-y-[-50%] -left-4 w-[40px] aspect-square rounded-full bg-white flex items-center justify-center rotate-180 group"
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
                className="group-hover:stroke-orange"
              />
            </svg>
          </button>
          <button
            type="button"
            className="absolute top-[50%] translate-y-[-50%] -right-4 w-[40px] aspect-square rounded-full bg-white flex items-center justify-center group"
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
                className="group-hover:stroke-orange"
              />
            </svg>
          </button>
        </div>

        <div className="product-image-list hidden md:flex justify-center gap-8 mt-[30px]">
          {list.map((item) => {
            return (
              <div
                key={Math.random() * 50}
                className={`border-2 border-transparent rounded-[10px] overflow-hidden cursor-pointer ${
                  activeProductImage === item && "border-orange"
                }`}
              >
                <div className="bg-white">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products_view_flote;
