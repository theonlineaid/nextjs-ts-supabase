"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function TopMenu() {
  const router = useRouter();
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <>
      <div id="TopMenu" className="border-b">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[11px] text-[#333333] px-2 h-8"
          >
            <li className="relative px-3">
              {/* {isLoggedIn()} */}

              <div
                id="AuthDropdown"
                className={`absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg ${
                  isMenu ? "visible" : "hidden"
                } `}
              >
                <div>
                  <div className="flex items-center justify-start gap-1 p-3">
                    <img width={50} src={""} />
                    {/* {user?.picture}  */}
                    <div className="font-bold text-[13px]">
                      name
                      {/* {user?.name} */}
                    </div>
                  </div>
                </div>

                <div className="border-b" />

                <ul className="bg-white">
                  <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    <Link href="/orders">My orders</Link>
                  </li>
                  <li
                    // onClick={() => {
                    //   user.signOut();
                    //   setIsMenu(false);
                    // }}
                    className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer"
                  >
                    Sign out
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
            <li className="px-3 hover:underline cursor-pointer">
              Help & Contact
            </li>
          </ul>

          <ul
            id="TopMenuRight"
            className="flex items-center text-[11px] text-[#333333] px-2 h-8"
          >
            <li
              onClick={() => router.push("/address")}
              className="flex items-center gap-2 px-3 hover:underline cursor-pointer"
            >
              <img width={32} src="/images/uk.png" />
              Ship to
            </li>
            {/* <ClientOnly> */}
            <li className="px-3 hover:underline cursor-pointer">
              <div onClick={() => router.push("/cart")} className="relative">
                <AiOutlineShoppingCart size={22} />
                {/* {cart.cartCount() > 0 ? ( */}
                <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                  <div className=" flex items-center justify-center -mt-[1px]">
                    {/* {cart.cartCount()} */}5
                  </div>
                </div>
                {/* ) : (
                    <div></div>
                  )} */}
              </div>
            </li>
            {/* </ClientOnly> */}
          </ul>
        </div>
      </div>
    </>
  );
}
