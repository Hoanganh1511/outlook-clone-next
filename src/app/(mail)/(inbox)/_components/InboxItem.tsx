"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { IInbox } from "@/types";
import { formatDateInbox } from "@/utils/formatDateInbox";
import React, { useState } from "react";
import { GoTrash } from "react-icons/go";

const InboxItem = ({ inbox }: { inbox: IInbox }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Mouse enters the parent
      onMouseLeave={() => setIsHovered(false)} // Mouse leaves the parent
      className="pl-[12px] bg-white hover:bg-secondary border-b-[1px] border-gray-200 flex items-stretch cursor-default"
    >
      <div className="flex-1 flex pb-[12px]">
        <div className="pt-[12px]">
          {isHovered ? (
            <div className="size-[34px] bg-transparent rounded-full flex items-center justify-center">
              <Checkbox />
            </div>
          ) : (
            <div className="size-[34px] bg-[#a9d3f2] rounded-full flex items-center justify-center">
              <span className="text-[14px] text-[#004377] font-bold">HA</span>
            </div>
          )}
        </div>
        <div className="flex-1 ml-[12px] pt-[6px] pr-[] flex flex-col">
          <p className="text-[14px]"> {inbox.from.name} </p>
          <div className="w-full flex justify-between">
            <p className="text-[14px]">{inbox.subject}</p>
            <p className="text-[13px]">{formatDateInbox(inbox.createdAt)}</p>
          </div>
          <p
            className="text-[14px] text-black/65 line-clamp-1"
            dangerouslySetInnerHTML={{ __html: inbox.html }}
          ></p>
        </div>
      </div>
      <button className="group/button ml-[12px] flex items-center justify-center hover:bg-[#fef2f3]">
        <div className="mt-auto mb-auto px-[10px] ">
          <GoTrash className="group-hover/button:text-red-600" />
        </div>
      </button>
    </div>
  );
};

export default InboxItem;
