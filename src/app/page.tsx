// import { Icon } from "astro-icon/components";
// import BaseHead from "../components/BaseHead.astro";
// import Header from "../components/Header.astro";
// import Footer from "../components/Footer.astro";
// import { SITE_TITLE, SITE_DESCRIPTION } from "../config.js";
// import BaseLayout from "../layouts/BaseLayout.astro";

const cards = [
  { title: "I Build Software", icon: "🧑‍💻" },
  { title: "I Make Content", icon: "🎥" },
];

import React from "react";

export default function page() {
  return (
    <>
      <div className="h-16 lg:h-24"></div>
      <h3 className="text-xl md:text-2xl mb-1 md:mb-2">Hey there 👋</h3>
      <h1 className="text-3xl md:text-5xl font-semibold">
        I{"'"}m Arif Hossain, a{" "}
        <a href="/projects" className="text-purple-400">
          Software Engineer
        </a>{" "}
        and Hobbyist{" "}
        <a
          href="https://www.youtube.com/@ariflogs"
          target="_blank"
          className="text-purple-400"
        >
          Content Creator
        </a>
        .
      </h1>

      {/* <div className="flex">
        {cards.map((item) => (
            <div key={item.title} className="border border-gray-400 hover:border-gray-200 px-4 py-2 rounded flex align-middle justify-center">
              <p className="text-4xl mr-4">{item.icon}</p>
              <p className="text-lg font-bold">{item.title}</p>
            </div>
          ))}
      </div> */}
      <div className="h-16 lg:h-24"></div>
    </>
  );
}
