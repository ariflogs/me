import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-purple-300 mt-20">
      <div className="flex justify-center align-middle py-2 px-4">
        <a href="https://linkedin.com/in/devarifhossain" target="_blank">
          LinkedIn
        </a>
        <span className="px-2"> ·</span>
        <a href="https://twitter.com/ariflogs" target="_blank">
          Twitter
        </a>
        <span className="px-2"> ·</span>
        <a href="https://github.com/ariflogs" target="_blank">
          Github
        </a>
        <span className="px-2"> ·</span>
        <a href="https://youtube.com/@ariflogs" target="_blank">
          YouTube
        </a>
      </div>
    </footer>
  );
}
