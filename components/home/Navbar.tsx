import Link from "next/link";
import React from "react";

type Props = {};

const links = [
  {
    id: 1,
    name: "home",
    path: "/",
  },
  {
    id: 2,
    name: "Services",
    path: "/services",
  },
  {
    id: 3,
    name: "About Us",
    path: "/about",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 bg-white z-50">
      {/* container */}
      <div className="flex md:w-[80%] mx-auto py-4 px-2 justify-between items-center">
        <div className="w-[200px]">
          <Link href="/">
            <img
              src="https://irp.cdn-website.com/eacf0b23/dms3rep/multi/BrokerBase+Logo-01.svg"
              alt="logo"
              className="w-full"
            />
          </Link>
        </div>

        <div className="space-x-6 hidden md:block">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.id}
              className="font-headerTwo font-semibold hover:underline capitalize"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <Link
            href="/get-started"
            className="font-headerTwo font-semibold bg-yellow-400 rounded-md px-6 py-3 w-full block"
          >
            Register Today
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
