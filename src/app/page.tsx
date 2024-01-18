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
      <div className="min-h-96">
        <h2 className="text-3xl">Hey there 👋</h2>
        <h2 className="text-3xl mb-4">
          I{"'"}m Arif Hossain, a Software Engineer and Hobbyist Content
          Creator.
        </h2>

        <div className="flex">
          {/* {cards.map((item) => (
            <div key={item.title} className="border border-gray-400 hover:border-gray-200 px-4 py-2 rounded flex align-middle justify-center">
              <p className="text-4xl mr-4">{item.icon}</p>
              <p className="text-lg font-bold">{item.title}</p>
            </div>
          ))} */}
        </div>
      </div>
  );
}
