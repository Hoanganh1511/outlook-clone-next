"use client";
import React from "react";
import { TiUserAddOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
const ViewToolTab = () => {
  return (
    <div className="bg-white rounded-[4px] p-[4px] shadow-md">
      <div className="flex">
        <button className="bg-primary hover:bg-primary_hover flex justify-center items-center rounded-l-[4px] px-[12px] h-[32px] text-white">
          <TiUserAddOutline className="size-[20px] mr-[8px]" />
          <span className="text-[14px] text-white">New contact</span>
        </button>
        <button className="ml-[1px] bg-primary hover:bg-primary_hover relative flex items-center justify-center px-[6px] rounded-r-[4px]">
          <IoIosArrowDown className="text-white " />
        </button>
      </div>
    </div>
  );
};

export default ViewToolTab;
