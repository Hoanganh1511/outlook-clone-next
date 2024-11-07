"use client";
import React, { useState } from "react";
import { IoSearchOutline, IoFilterOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
const ComplexSearch = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="w-full">
      <section
        onBlur={() => setIsFocus(false)}
        className="relative flex items-center h-[48px] w-full"
      >
        <div className="scope flex items-center w-[140px]">
          {isFocus && (
            <button className="relative w-full h-[32px] px-[12px] bg-[#F5F5F5] hover:bg-[#e5e5e5] border-r-[1px] border-gray-200 rounded-l-[4px]">
              <div className="text-[13px] text-left max-w-[90px] line-clamp-1 text-gray-500">
                Conversation test length
              </div>
              <FaChevronDown className="absolute top-1/2 right-[8px] -translate-y-1/2 text-[14px] text-gray-400" />
            </button>
          )}
        </div>

        <div
          className={`relative w-full ${
            isFocus ? "max-w-full" : "max-w-[350px]"
          }`}
        >
          {isFocus ? (
            <button
              onClick={() => setIsFocus(false)}
              className="absolute top-1/2 left-[4px] -translate-y-1/2 size-[24px] flex items-center justify-center hover:bg-[#F5F5F5] cursor-pointer"
            >
              <GoArrowLeft className=" text-[18px] text-black/70" />
            </button>
          ) : (
            <button className="absolute top-1/2 left-[4px] -translate-y-1/2 size-[24px] flex items-center justify-center hover:bg-[#F5F5F5] cursor-pointer">
              <IoSearchOutline className=" text-[18px] text-black/70" />
            </button>
          )}
          <input
            onFocus={() => setIsFocus(true)}
            className={`w-full h-[32px] pl-[34px]  pr-[12px] text-[14px] outline-none border-none ${
              isFocus ? "rounded-none" : "rounded-[4px]"
            } `}
            placeholder="Search"
          />
          {isFocus && (
            <button className="absolute top-1/2 -translate-y-1/2 right-[6px] size-[24px] bg-transparent hover:bg-[#F5F5F5] flex items-center justify-center">
              <IoFilterOutline className="text-[14px] text-black/90" />
            </button>
          )}
        </div>
        {isFocus && (
          <button className="size-[32px] bg-[#F5F5F5] hover:bg-[#e5e5e5] border-l-[1px] border-gray-200 rounded-r-[4px] flex items-center justify-center">
            <IoSearchOutline className="text-[18px] text-black/70" />
          </button>
        )}
      </section>
    </div>
  );
};

export default ComplexSearch;
