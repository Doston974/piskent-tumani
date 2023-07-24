"use client"
import Test from "@/pages/test/Test";
import React from "react";

const Header = () => {
  return (
    <div className="h-[50px] bg-[#012A4A] items-center lg:px-0 md:px-4 px-6 border-b-2">
      <div className="max-w-[1300px] mx-auto h-full items-center flex justify-between">
        <div className="items-center text-white mr-10">
          <p className="text-[18px]">
            <a href="tel:+998702022012">
              Ishonch Telefoni: +998 70 202 20 12
            </a>
          </p>
        </div>
        <div className="lg:flex items-center md:flex hidden text-white">
          <Test />
        </div>
      </div>
    </div>
  );
};

export default Header;
