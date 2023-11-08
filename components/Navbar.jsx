"use client"; //To use react hooks

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/constants";
import classNames from "classnames";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="max-w-[1440px] w-full z-10  sticky top-0 py-4 bg-white">
      <nav className="flex items-center justify-between margin-x">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Prithwish Hati Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none lg:flex hidden justify-end gap-7 text-lg ">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.key}
              href={navLink.href}
              onClick={() => setActive(navLink.text)} //Onclicking, the active state will be updated to the 'text' value of navLink
              className={classNames({
                "text-magenta underline underline-offset-4":
                  active == navLink.text,
                "text-black": active !== navLink.text,
                " hover:text-magenta cursor-pointer transition-colors": true,
              })}
            >
              {navLink.text}
            </Link>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="mobile__menu">
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
            } px-4 py-3 bg-sky-200 absolute top-10 my-5 right-0 mx-4 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex items-start flex-col gap-1">
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.key}
                  href={navLink.href}
                  onClick={() => setActive(navLink.text)} //Onclicking, the active state will be updated to the 'text' value of navLink
                  className={classNames({
                    "text-magenta font-medium": active == navLink.text,
                    "text-slate-800": active !== navLink.text,
                    "hover:text-magenta cursor-pointer transition-colors": true,
                  })}
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
