"use client"; //To use react hooks

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__menu-container margin-x">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Prithwish Hati Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="pc__menu-item">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.key}
              href={navLink.href}
              onClick={() => setActive(navLink.text)} //Onclicking, the active state will be updated to the 'text' value of navLink
              className={`navbar__links-hover cursor-pointer 
                ${
                  active === navLink.text
                    ? "navbar__links-active"
                    : "text-black"
                }`}
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
            className={`${toggle ? "flex" : "hidden"}  mobile__menu-container`}
          >
            <ul className="mobile__menu-item">
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.key}
                  href={navLink.href}
                  onClick={() => setActive(navLink.text)} //Onclicking, the active state will be updated to the 'text' value of navLink
                  className={`navbar__links-hover cursor-pointer 
                ${
                  active === navLink.text
                    ? "navbar__links-active"
                    : "text-slate-800"
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
