import React from "react";
import { TbGridDots } from "react-icons/tb";
import ComplexSearch from "../ComplexSearch";
import { LuVideo } from "react-icons/lu";
import { SiMicrosoftteams } from "react-icons/si";
import { TbCalendarCheck } from "react-icons/tb";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import Link from "next/link";
const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[48px] bg-[#0F6CBD]">
      <div className="flex ">
        <div className="flex items-center justify-center size-[48px]">
          <TbGridDots className="text-[22px] text-white" />
        </div>
        <div className="flex-1 flex items-center justify-between gap-x-[30px]">
          <div className="flex">
            <div className="pl-[8px] pr-[12px]">
              <h1 className="text-white font-medium">Outlook</h1>
            </div>
          </div>
          <div className="flex-1 flex justify-start">
            <ComplexSearch />
          </div>
          <div className="flex items-center">
            <div className="flex items-center h-[48px] px-[12px] hover:bg-black/10 cursor-pointer">
              <LuVideo className="size-[18px] mr-[8px] text-white" />
              <span className="text-[14px] text-white">Meet Now</span>
            </div>
            <div className="flex items-center h-[48px] px-[12px] hover:bg-black/10 cursor-pointer">
              <Link href="https://teams.live.com/v2/" target="_blank">
                <SiMicrosoftteams className="size-[18px] text-white" />
              </Link>
            </div>
            <div className="flex items-center h-[48px] px-[14px] hover:bg-black/10 cursor-pointer">
              <TbCalendarCheck className="size-[18px] text-white" />
            </div>
            <div className="flex items-center h-[48px] px-[14px] hover:bg-black/10 cursor-pointer">
              <GoBell className="size-[18px] text-white" />
            </div>
            <div className="flex items-center h-[48px] px-[14px] hover:bg-black/10 cursor-pointer">
              <IoSettingsOutline className="size-[18px] text-white" />
            </div>
            <div className="flex items-center h-[48px] px-[14px] hover:bg-black/10 cursor-pointer">
              <FaRegLightbulb className="size-[18px] text-white" />
            </div>
            <div className="flex items-center justify-center size-[48px]">
              <div className="size-[34px] rounded-full border-[1px] border-white flex items-center justify-center">
                <span className="text-white text-[12px]">HA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
