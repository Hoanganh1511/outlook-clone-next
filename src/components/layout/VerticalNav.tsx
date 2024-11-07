"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// type Props = {};

const VerticalNav = () => {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 w-[48px] h-full  px-[4px] pt-[4px] bg-[#f0f0f0] ">
      <ul className="flex flex-col gap-y-[6px]">
        <li className="">
          <Link
            href="/"
            className={`size-[40px] flex justify-center duration-100 hover:bg-white/40 ${
              pathname === "/" ? "active-vertical-nav" : " "
            }`}
          >
            <Image
              src="/assets/icons/sidebar-mail.svg"
              width={20}
              height={20}
              alt=""
            />
          </Link>
        </li>
        <li className="">
          <Link
            href="/people"
            className={`size-[40px] flex justify-center duration-100 hover:bg-white/40 ${
              pathname === "/people" ? "active-vertical-nav" : " "
            }`}
          >
            <Image
              src="/assets/icons/sidebar-group.svg"
              width={20}
              height={20}
              alt=""
            />
          </Link>
        </li>
        <li className="">
          <Link
            href="/host"
            className={`size-[40px] flex items-center justify-center duration-100 hover:bg-white/40 ${
              pathname === "/host" ? "active-vertical-nav" : " "
            }`}
          >
            <Image
              src="/assets/icons/sidebar-check.png"
              width={20}
              height={20}
              alt=""
              className="size-[20px]"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNav;
