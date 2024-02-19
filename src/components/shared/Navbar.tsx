import Image from "next/image";
import Link from "next/link";
import React from "react";

const navRoutes = [
  { title: "Home", route: "/", target: "_blank" },
  { title: "#Project2024", route: "/project2024", target: "_blank" },
  { title: "Blogs", route: "/blogs", target: "_blank" },
  { title: "Projects", route: "/projects", target: "_blank" },
  { title: "Aboout", route: "/about", target: "_blank" },
];

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-0 container max-w-5xl mx-auto">
      <a href="/">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          className="mr-4"
          alt="image description"
        />
      </a>

      <nav className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4">
        {navRoutes.map((route) => (
          <Link href={route.route} key={route.route}>
            {route.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
