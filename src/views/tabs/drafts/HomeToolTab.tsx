"use client";
import { TiUserAddOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { CiVolumeMute } from "react-icons/ci";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { PiShieldWarning } from "react-icons/pi";
import { RiFolderSharedLine } from "react-icons/ri";
import { LuReplyAll } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiUndo } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ToolItem from "@/components/ToolItem";
import ToolItemSecondary from "@/components/ToolItemSecondary";
import { RiUserForbidLine } from "react-icons/ri";
import { LiaBroomSolid } from "react-icons/lia";
import { TbFolderCog } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
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
        <div className="ml-[8px]">
          <ToolItem
            icon={<HiOutlineArchiveBox />}
            name="Archive"
            onClick={() => {}}
          />
        </div>
        <div className="ml-[8px]">
          <ToolItem
            icon={<PiShieldWarning />}
            name="Report"
            onClick={() => {}}
          />
        </div>
        <div className="ml-[8px]">
          <ToolItem
            icon={<RiFolderSharedLine />}
            name="Move to"
            onClick={() => {}}
          >
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
        <hr className="h-[26px] w-[1px] bg-black/45 mx-[8px]" />
        <div className="">
          <ToolItem icon={<LuReplyAll />} name="Reply all" onClick={() => {}}>
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
        <hr className="h-[26px] w-[1px] bg-black/45 mx-[8px]" />
        <div className="">
          <ToolItem
            icon={<IoMailOpenOutline />}
            name="Read / Unread"
            onClick={() => {}}
          />
        </div>

        <hr className="h-[26px] w-[1px] bg-black/45 mx-[8px]" />
        <div className="">
          <ToolItem
            icon={<CiUndo className="size-[18px]" />}
            name="Undo"
            onClick={() => {}}
          />
        </div>
        <hr className="h-[26px] w-[1px] bg-black/45 mx-[8px]" />
        <div className="">
          <ToolItemSecondary
            icon={<HiOutlineDotsHorizontal className="size-[18px]" />}
          >
            <div className="bg-white rounded-[4px] shadow-md py-[12px] px-[2px] min-w-[150px]">
              <h2 className="text-[14px] font-bold block px-[12px] mb-[6px]">
                Move & delete\
              </h2>
              <ul>
                <li className="flex items-center justify-start px-[12px] py-[6px] hover:bg-gray-100 rounded-sm cursor-pointer">
                  <RiUserForbidLine className="text-red-500 text-[18px] mr-[8px]" />
                  <span className="text-[14px]">Block</span>
                </li>
                <li
                  className="r
                elative group flex items-center justify-start px-[12px] py-[6px] hover:bg-gray-100 rounded-sm cursor-pointer"
                >
                  <LiaBroomSolid className="mr-[8px] text-[18px] " />
                  <span className="text-[14px]">Sweep</span>
                </li>
                <li className="relative group flex items-center justify-start px-[12px] py-[6px] hover:bg-gray-100 rounded-sm cursor-pointer">
                  <TbFolderCog className="mr-[8px] text-[18px]" />
                  <span className="text-[14px]">Rules</span>
                  <ul className="absolute hidden group-hover:block left-full top-0 py-[4px] px-[2px] w-[160px] bg-white rounded-sm shadow-md">
                    <li className="flex items-center justify-start px-[12px] py-[6px] hover:bg-gray-100 rounded-sm cursor-pointer">
                      <TbFolderCog className="mr-[8px]" />
                      <div className="text-[14px]">Create rule</div>
                    </li>
                    <li className="flex items-center justify-start px-[12px] py-[6px] hover:bg-gray-100 rounded-sm cursor-pointer">
                      <IoSettingsOutline className="mr-[8px] text-primary" />
                      <div className="text-[14px]">Manage rules</div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </ToolItemSecondary>
        </div>
      </div>
    </div>
  );
};

export default HomeToolTab;
