import Image from "next/image";
import React from "react";

const navRoutes = [
  { title: "Home", route: "/", target: "_blank" },
  { title: "Aboout", route: "/", target: "_blank" },
  { title: "Projects", route: "/", target: "_blank" },
  { title: "Blogs", route: "/", target: "_blank" },
];

export default function Navbar() {

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-0 container max-w-4xl mx-auto">
      <a href="/">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          className="mr-4"
          alt="image description"
        />
      </a>

      <nav className="flex flex-col justify-end mobile-nav space-y-2 md:hidden">
        <a href="/">Home</a>
        <a href="/blogs">Blogs</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        {/* <a href="https://dev.to/ariflogs" target="_blank">
          Blogs
        </a> */}
      </nav>

      <nav className="hidden md:block space-x-4">
        <a href="/">Home</a>
        <a href="/blogs">Blogs</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}
