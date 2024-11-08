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
import { RiFlag2Line } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CiUndo } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ToolItem from "@/components/ToolItem";
import ToolItemSecondary from "@/components/ToolItemSecondary";
import { RiUserForbidLine } from "react-icons/ri";
import { LiaBroomSolid } from "react-icons/lia";
import { TbFolderCog } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
const ViewToolTab = () => {
  return (
    <div className="relative z-10 bg-white rounded-[4px] p-[4px] shadow-md">
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
        <div className="ml-[8px]">
          <ToolItem
            icon={<RiFlag2Line className="text-[#a4262c]" />}
            name="Flag / Unflag"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewToolTab;
