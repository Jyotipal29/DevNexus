import { link } from "fs";
import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Home",
    uil: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    uil: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    uil: "/blog",
  },
  {
    id: 4,
    title: "About",
    uil: "/about",
  },
  {
    id: 5,
    title: "Contact",
    uil: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    uil: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="container mx-auto bg-gray-600">
      <div>
        <Link href="/">devnexus</Link>
      </div>
      <ul>
        {links.map((it) => (
          <>
            <Link href={it.uil}>{it.title}</Link>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
