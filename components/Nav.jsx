import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import context_products from "./context/Context_products";
import Floating_cart from "./Floating_cart";

function Nav() {
  const context = useContext(context_products);
  const [menuStatus, setMenuStatus] = useState(false);
  const [cartStatus, setCartStatus] = useState(false);
  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <div className="max-w-[1111px] flex justify-between mx-auto h-[68px] lg:h-[112px]  w-full items-center px-6 xl:p-0 sticky top-0 bg-white z-40">
        <div className="flex items-center gap-4 lg:gap-14 h-full">
          <button type="button" aria-label={`button menu status:- ${menuStatus}`}>
            <Image
              src={"/assets/svg/icon-menu.svg"}
              width={16}
              height={15}
              alt="menu-icon"
              className="lg:hidden cursor-pointer"
              onClick={() => {
                setMenuStatus(true);
              }}
            />
          </button>
          <button type="button" aria-label="brand link" id="brand">
            <Image
              src={"/assets/svg/logo.svg"}
              width="137"
              height={"39"}
              alt={"brand logo"}
            />
          </button>
          <menu
            role={"menubar"}
            id="navbar-01"
            className="hidden lg:flex gap-8 text-grayish-blue h-full relative "
          >
            <div
              className={`hover:text-very-dark-blue border-b-4 border-transparent  grid items-center cursor-pointer ${
                activePage === 1 && "border-orange"
              }`}
            >
              <Link
                href={"#collections"}
                role={"menuitem"}
                onClick={() => setActivePage(1)}
              >
                Collections
              </Link>
            </div>
            <div
              className={`hover:text-very-dark-blue border-b-4 border-transparent grid items-center cursor-pointer ${
                activePage === 2 && "border-orange"
              }`}
            >
              <Link
                href={"#men"}
                role={"menuitem"}
                onClick={() => setActivePage(2)}
              >
                Men
              </Link>
            </div>{" "}
            <div
              className={`hover:text-very-dark-blue border-b-4 border-transparent grid items-center cursor-pointer ${
                activePage === 3 && "border-orange"
              }`}
            >
              {" "}
              <Link
                href={"#women"}
                role={"menuitem"}
                onClick={() => setActivePage(3)}
              >
                Women
              </Link>
            </div>
            <div
              className={`hover:text-very-dark-blue border-b-4 border-transparent grid items-center ${
                activePage === 4 && "border-orange"
              }`}
            >
              {" "}
              <Link
                href={"#about"}
                role={"menuitem"}
                onClick={() => setActivePage(4)}
              >
                About
              </Link>
            </div>
            <div
              className={`hover:text-very-dark-blue border-b-4 border-transparent  grid items-center ${
                activePage === 5 && "border-orange"
              }`}
            >
              {" "}
              <Link
                href={"#contact"}
                role={"menuitem"}
                onClick={() => setActivePage(5)}
              >
                Contact
              </Link>
            </div>
          </menu>
        </div>
        <div id="cart--profile" className="flex items-center gap-6 lg:gap-12">
          <button
            type="button"
            aria-label="product cart button"
            id="cart"
            className="relative cursor-pointer"
            onClick={() => setCartStatus(!cartStatus)}
          >
            <Image
              src={"/assets/svg/icon-cart.svg"}
              width={20}
              height={20}
              alt={"cart-icon"}
              aria-label="cart"
            />
            <span
              id="cart-item-indicator"
              className="absolute bg-orange text-xs px-2 rounded-lg -top-2 left-2 font-bold text-white "
            >
              {context.productDetail.length > 0 &&
                context.productDetail[0].quantity}
            </span>
          </button>
          <Image
            src={"/assets/images/image-avatar.png"}
            width={50}
            height={50}
            alt={"avatar"}
            className="w-6 lg:w-[50px] ring ring-transparent rounded-full hover:ring-orange cursor-pointer"
          />
        </div>
        {cartStatus && <Floating_cart />}
      </div>
      <hr className="max-w-[1111px] mx-auto" />
      <div
        className={`fixed top-0 left-0 w-full h-screen z-50 bg-black/75 ${
          menuStatus ? "left-0" : "-left-full"
        }`}
        onClick={() => {
          setMenuStatus(false);
        }}
      >
        <div
          className={`w-[250px] relative h-full bg-white p-6 font-bold delay-500 ${
            menuStatus ? "left-0" : "-left-full"
          }`}
        >
          <button type="button" className="mb-[53px]">
            <Image
              src={"/assets/svg/icon-close.svg"}
              width={13}
              height={13}
              alt="close-menu-btn"
            />
          </button>
          <menu className="flex flex-col gap-4" role={"menubar"}>
            <Link
              href={"#collections"}
              role={"menuitem"}
              onClick={() => setActivePage(1)}
            >
              Collections
            </Link>
            <Link
              href={"#men"}
              role={"menuitem"}
              onClick={() => setActivePage(2)}
            >
              Men
            </Link>
            <Link
              href={"#women"}
              role={"menuitem"}
              onClick={() => setActivePage(3)}
            >
              Women
            </Link>
            <Link
              href={"#about"}
              role={"menuitem"}
              onClick={() => setActivePage(4)}
            >
              About
            </Link>
            <Link
              href={"#contact"}
              role={"menuitem"}
              onClick={() => setActivePage(5)}
            >
              Contact
            </Link>
          </menu>
        </div>
      </div>
    </>
  );
}

export default Nav;
