import React from "react";
import "/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className=" container mx-auto flex justify-between items-center w-full mb-16 pt-5 top-0 sticky z-10 h-20 bg-cultured bg-opacity-90  dark:bg-eerie-black dark:bg-opacity-70 px-5">
      <div >
        <Link href={"/"} className="gap-2 flex flex-center">
          <Image
            src={"/assets/images/profile-picture.jpg"}
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h1 className="logo-text dark:text-cultured">
            Beatrice <span className="gradient-text">Wambui</span>
          </h1>
        </Link>
      </div>
      <div className="">
        <DarkModeSwitch/>
      </div>
    </div>
  );
}
