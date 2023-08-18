"use client"; //To use react hooks

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full h-6 z-10 absolute">
      <nav className="max-w-[1440px] flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Prithwish Hati Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none lg:flex hidden justify-end gap-7 text-sm ">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.key}
              href={navLink.href}
              onClick={() => setActive(navLink.text)} //Onclicking, the active state will be updated to the 'text' value of navLink
              className={`nav__links-hover cursor-pointer 
                ${
                  active === navLink.text
                    ? "text-[#ff869e] font-semibold underline underline-offset-4" // active state styles
                    : "text-black"
                }`}
            >
              {navLink.text}
            </Link>
          ))}
        </ul>


        {/* Mobile Navigation */}

        {/* flex-1 allows a flex item to grow and shrink as needed, ignoring its initial size */}
        <div className="lg:hidden flex flex-1 justify-end items-center text-sm">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            width={28}
            height={28}
            alt="Mobile Menubar"
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} //When you click the close.svg, state is updated to no-toggle.
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } pr-8 pl-3 py-3 bg-sky-200 absolute top-8 right-0 mx-4 my-5 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.key}
                  href={navLink.href}
                  onClick={() => setActive(navLink.text)} //Onclicking, the active state will be updated to the 'text' value of navLink
                  className={`nav__links-hover cursor-pointer 
                ${
                  active === navLink.text
                    ? "text-[#ff869e] font-semibold underline underline-offset-4" // active state styles
                    : "text-black"
                }`}
                >
                  {navLink.text}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
