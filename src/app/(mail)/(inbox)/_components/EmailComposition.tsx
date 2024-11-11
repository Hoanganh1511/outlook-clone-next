"use client";
import React, { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { GoProjectSymlink, GoTrash } from "react-icons/go";
import axios from "axios";
import { toast } from "sonner";
import MiniSpinLoading from "@/components/common/Loading/MiniSpinLoading";
const EmailComposition = () => {
  const [fromEmail, setFromEmail] = useState("jiminsample1@gmail.com");
  const [toEmail, setToEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setLoading] = useState(false);
  const onSendEmail = () => {
    console.log({
      from: {
        name: "Hoàng Tuấn Anh",
        address: "jiminsample1@gmail.com",
      },
      recipients: [
        {
          name: "Hồng Hài Nhi",
          address: toEmail,
        },
      ],
      subject: subject || "",
      html: body || "",
    });
    setLoading(true);
    axios
      .post(`http://localhost:8000/email/send-email`, {
        from: {
          name: "Hoàng Tuấn Anh",
          address: "jiminsample1@gmail.com",
        },
        recipients: [
          {
            name: "Hồng Hài Nhi",
            address: toEmail,
          },
        ],
        subject: subject || "",
        html: body || "",
      })
      .then((res) => {
        toast.success("Send email successfully !");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Something wrong !");
        setLoading(false);
      });
    // const { data, error, isValidating, mutate } = useSWR<IInbox[]>(
    //   [
    //     `http://localhost:8000/email?filter=${filter}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    //   ],
    //   fetcher,
    //   {
    //     revalidateIfStale: false,
    //     revalidateOnFocus: true,
    //     revalidateOnReconnect: true,
    //     refreshInterval: 10000,
    //   }
    // );
  };
  return (
    <div className="flex-1 flex flex-col ml-[12px]">
      <div className="flex-1 mb-[20px] flex flex-col bg-white border-[1px]  border-gray-300 rounded-[6px] shadow-md">
        <div className="flex p-[12px]">
          <div className="flex items-center">
            <button
              onClick={() => onSendEmail()}
              className="flex items-center justify-center h-[32px] bg-primary hover:bg-primary_hover text-white px-[20px] py-[4px] rounded-l-[4px]"
            >
              {isLoading ? (
                <MiniSpinLoading
                  width={18}
                  height={18}
                  color="white"
                  position="center"
                />
              ) : (
                " Send"
              )}
            </button>
            <button className="ml-[1px] flex items-center justify-center size-[32px] bg-primary hover:bg-primary_hover rounded-r-[4px]">
              <IoChevronDown className="size-[18px] text-white" />
            </button>
          </div>
          <div className="flex-1 ml-[8px]">
            <button className="relative w-fit max-w-[400px] pl-[12px] pr-[28px] py-[4px] bg-transparent hover:bg-black/5 rounded-[6px] cursor-pointer">
              <span className="text-[14px] text-black/80">
                From: {fromEmail}
              </span>
              <IoChevronDown className="absolute mt-[2px] top-1/2 right-[8px] -translate-y-1/2 size-[14px] text-black/40" />
            </button>
          </div>
          <button className="mr-[12px] size-[32px] flex items-center justify-center bg-transparent hover:bg-black/5 rounded-[4px]">
            <GoTrash className="size-[16px] text-black/60" />
          </button>
          <button className="size-[32px] flex items-center justify-center  bg-transparent hover:bg-black/5 rounded-[4px]">
            <GoProjectSymlink className="size-[16px] text-black/60" />
          </button>
        </div>
        <div className="border-t-[1px] flex items-center">
          <div className="px-[12px] py-[6px]">
            <button className=" px-[22px] py-[3px] rounded-[4px] border-[1px]">
              To
            </button>
          </div>
          <div className="flex-1 flex items-center p-[12px] border-b-[1px]">
            <input
              value={toEmail}
              onChange={(e) => setToEmail(e.target.value)}
              className="flex-1 text-black/80 text-[14px] outline-none border-none"
            />
            <button className="size-[32px] flex items-center justify-center text-[12px] text-black/60 bg-transparent hover:bg-black/5 rounded-[4px]">
              Cc
            </button>
            <button className="size-[32px] flex items-center justify-center text-[12px] text-black/60 bg-transparent hover:bg-black/5 rounded-[4px]">
              Bcc
            </button>
          </div>
        </div>
        <div className="p-[12px] border-b-[1px] flex items-center">
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="flex-1 border-none outline-none text-black/80 placeholder:text-black/70 placeholder:text-[14px] placeholder:font-normal "
            placeholder="Add a subject"
          />
          <div className="text-[12px] text-black/70">
            Draft saved at 2:33 PM
          </div>
        </div>
        {/* body mail */}
        <div className="flex-1 p-[12px] flex flex-col">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="flex-1 w-full border-none outline-none"
            placeholder="..."
          ></textarea>
        </div>
      </div>
      <div className="h-[30px] w-full bg-black/5 rounded-t-[6px]"></div>
    </div>
  );
};

export default EmailComposition;
