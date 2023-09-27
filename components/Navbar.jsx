"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DarkModeSwitch from "./DarkModeSwitch";
import Header from "./Header";
import Image from "next/image";

export default function Navbar() {
  const currentRoute = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const linkStyle = "headericons";
  const activeStyle =
    linkStyle + " bg-gradient-to-r from-crayola to-red text-white ";
  const nonActiveStyle = linkStyle + " text-black";

  return (
    <div className="col-span-12 lg:col-span-8">
      <header className="lg:w-[526px] h-[144px] lg:block p-8 ml-auto mb-10 bg-white dark:bg-black rounded-2xl  mt-[180px] lg:mt-[220px] hidden">
        <nav className="lg:block">
          <ul className="flex">
            <Link
              href="/"
              className={currentRoute === "/" ? activeStyle : nonActiveStyle}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 hover:stroke-white dark:stroke-cultured dark:text-cultured"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </span>

              <p className="dark:text-cultured">Home</p>
            </Link>
            <Link
              href="/resume"
              className={
                currentRoute === "/resume" ? activeStyle : nonActiveStyle
              }
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 hover:stroke-white dark:stroke-cultured"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              </span>
              <p className="dark:text-cultured">Resume</p>
            </Link>
            <Link
              href="/work"
              className={
                currentRoute === "/work" ? activeStyle : nonActiveStyle
              }
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 hover:stroke-white dark:stroke-cultured"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </span>
              <p className="dark:text-cultured">Work</p>
            </Link>
            <Link
              href="/contact"
              className={
                currentRoute === "/contact" ? activeStyle : nonActiveStyle
              }
            >
              <span>
                <svg
                  class="w-6 h-6  hover:stroke-white dark:stroke-cultured"
                  aria-hidden="true"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
              </span>
              <p className="dark:text-cultured">Contact</p>
            </Link>
          </ul>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <div className="lg:hidden pt-5 mb-16">
        <div className="container mx-auto flex justify-between">
          <div>
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
          <div className="lg:hidden flex space-x-2 items-center">
            <button
              className="bg-crayola text-white p-2 rounded-lg"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            <DarkModeSwitch />
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="bg-white dark:bg-black p-4 mt-2 dark:text-cultured">
            <ul>
              <li>
                <Link
                  href="/"
                  className={
                    currentRoute === "/"
                      ? "text-crayola"
                      : "text-black dark:text-cultured"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className={
                    currentRoute === "/resume"
                      ? "text-crayola"
                      : "text-black dark:text-cultured"
                  }
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={
                    currentRoute === "/work"
                      ? "text-crayola"
                      : "text-black dark:text-cultured"
                  }
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    currentRoute === "/contact"
                      ? "text-crayola"
                      : "text-black dark:text-cultured"
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
