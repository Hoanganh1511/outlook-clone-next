"use client";
import React, { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";
import { HiArrowsUpDown } from "react-icons/hi2";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GoTrash } from "react-icons/go";
import axios from "axios";
const InboxList = () => {
  const [currentTab, setCurrentTab] = useState<"focused" | "other">("focused");
  const [emailData, setEmailData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://mailtrap.io/accounts/${process.env.NEXT_PUBLIC_MAIL_ACCOUNT_ID}/inboxes`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${
              process.env.NEXT_PUBLIC_MAIL_API_KEY || ""
            }`,
            "Api-Token": process.env.NEXT_PUBLIC_MAIL_API_KEY || "",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const data =
    currentTab === "focused"
      ? [
          {
            username: "Hoàng Tuấn Anh",
            content: "test email account",
            time: "Thu 6:22 PM",
          },
          {
            username: "Nguyễn Văn Sơn",
            content: "gửi  email account",
            time: "Thu 7:24 PM",
          },
        ]
      : [
          {
            username: "Hoàng Tuấn Anh",
            content: "test email account",
            time: "Thu 6:22 PM",
          },
          {
            username: "Nguyễn Văn B",
            content: "gửi  email account",
            time: "Thu 7:24 PM",
          },
          {
            username: "Nguyễn Văn C",
            content: "gửi  email account",
            time: "Thu 7:24 PM",
          },
          {
            username: "Nguyễn Văn D",
            content: "gửi  email account",
            time: "Thu 7:24 PM",
          },
        ];
  return (
    <div className="w-[350px] border-[1px] border-gray-300 rounded-t-[6px]">
      <div className=" pl-[64px] pr-[10px] pt-[8px] pb-[6px] border-b-[1px] bg-white border-gray-300 flex justify-between rounded-t-[6px]">
        <div className="flex justify-center gap-[20px]">
          <button
            onClick={() => setCurrentTab("focused")}
            className="group relative pb-[2px]"
          >
            <span
              className={` ${
                currentTab === "focused" ? "font-semibold" : "font-normal"
              } `}
            >
              Focused
            </span>
            <span
              className={`absolute top-full left-1/2 -translate-x-1/2 ${
                currentTab === "focused"
                  ? "w-[80%] bg-primary"
                  : "w-[20%] bg-transparent"
              }  h-[2px] duration-200 group-hover:w-full`}
            ></span>
          </button>
          <button
            onClick={() => setCurrentTab("other")}
            className="group relative pb-[2px]"
          >
            <span
              className={` ${
                currentTab === "other" ? "font-semibold" : "font-normal"
              } `}
            >
              Other
            </span>
            <span
              className={`absolute top-full left-1/2 -translate-x-1/2 ${
                currentTab === "other"
                  ? "w-[80%] bg-primary"
                  : "w-[20%] bg-transparent"
              }  h-[2px] duration-200 group-hover:w-full`}
            ></span>
          </button>
        </div>
        <div className=" flex items-center">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <div className="size-[32px] rounded-sm hover:bg-black/5 flex items-center justify-center">
                  <IoCopyOutline />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <div className="size-[32px] rounded-sm hover:bg-black/5 flex items-center justify-center">
                  <BsFilter />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <div className="size-[32px] rounded-sm hover:bg-black/5 flex items-center justify-center">
                  <HiArrowsUpDown />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sorted: By Date </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <ul className="flex flex-col">
        {emailData &&
          emailData.length > 0 &&
          emailData.map((email, idx) => {
            return (
              <li
                key={idx}
                className="pl-[12px] bg-white hover:bg-secondary border-b-[1px] border-gray-200 flex items-stretch cursor-default"
              >
                <div className="flex-1 flex pb-[12px]">
                  <div className="pt-[12px]">
                    <div className="size-[34px] bg-[#a9d3f2] rounded-full flex items-center justify-center">
                      <span className="text-[14px] text-[#004377] font-bold">
                        HA
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 ml-[12px] pt-[6px] pr-[] flex flex-col">
                    <p className="text-[14px]">{/* {mail.username} */}</p>
                    <div className="w-full flex justify-between">
                      <p className="text-[14px]">
                        {/* {mail.content} */}

                        {JSON.stringify(email)}
                      </p>
                      <p className="text-[13px]">{/* {mail.time} */}</p>
                    </div>
                    <p className="text-[14px] text-black/65"> Content</p>
                  </div>
                </div>
                <button className="group/button ml-[12px] flex items-center justify-center hover:bg-[#fef2f3]">
                  <div className="mt-auto mb-auto px-[10px] ">
                    <GoTrash className="group-hover/button:text-red-600" />
                  </div>
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default InboxList;
