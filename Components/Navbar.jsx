import Link from "next/link";
import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className="Navbar">
        <div className="logo">
          <img src="/logo.png" alt="loading..." />
        </div>
        <div className={active ? "menu-links active " : "menu-links"}>
          <FaTimes className="times" onClick={() => setActive(!active)} />
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>Shop</li>
            </Link>
            <Link href="/">
              <li>Contact</li>
            </Link>
            <Link href="/">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className="menu-buttons" onClick={() => setActive(!active)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
