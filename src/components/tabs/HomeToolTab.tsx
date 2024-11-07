"use client";
import React from "react";
import { TiUserAddOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import { CiVolumeMute } from "react-icons/ci";
import ToolItem from "../ToolItem";
const HomeToolTab = () => {
  return (
    <div className="bg-white rounded-[4px] p-[4px] shadow-md">
      <div className="flex items-center">
        <div className="flex mr-[2px]">
          <button className="bg-primary hover:bg-primary_hover flex justify-center items-center rounded-l-[4px] px-[12px] h-[32px] text-white">
            <TiUserAddOutline className="size-[20px] mr-[8px]" />
            <span className="text-[14px] text-white">New email</span>
          </button>
          <button className="ml-[1px] bg-primary hover:bg-primary_hover relative flex items-center justify-center px-[6px] rounded-r-[4px]">
            <IoIosArrowDown className="text-white " />
          </button>
        </div>
        <div className="ml-[8px]">
          <ToolItem icon={<GoTrash />} name="Delete" onClick={() => {}}>
            <div className="flex flex-col px-[1px] py-[12px] shadow-md bg-white rounded-md">
              <button
                onClick={() => console.log(1)}
                className="flex items-center justify-center px-[16px] py-[6px] hover:bg-gray-100"
              >
                <GoTrash className="mr-[12px]" />
                <span className="text-[14px]">Delete</span>
              </button>
              <button className="flex items-center justify-center px-[16px] py-[6px] hover:bg-gray-100">
                <CiVolumeMute className="mr-[12px]" />
                <span className="text-[14px]">Ignore</span>
              </button>
            </div>
          </ToolItem>
        </div>
      </div>
    </div>
  );
};

export default HomeToolTab;
