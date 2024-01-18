import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-0 container max-w-4xl mx-auto">
      <a href="/">
        <Image
          src="/logo.png"
          width={100}
          height={80}
          className="mr-4"
          alt="image description"
        />
      </a>

      <nav className="flex flex-col justify-end mobile-nav space-y-1 md:hidden">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/blogs">Blogs</a>
      </nav>

      <nav className="hidden md:block space-x-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/blogs">Blogs</a>
      </nav>
    </header>
  );
}
