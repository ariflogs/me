import React from "react";

const projects = [
  {
    title: "Worldly Wanderlust",
    description:
      "Experience life across the world and find the destination that suits You.",
    url: "http://worldlywanderlust.com",
    pubDate: "Feb 1 2024",
    tags: "Blog, Podcast, GhostCMS",
  },
  {
    title: "SQL-to-NoSQL",
    description:
      "A NodeJS ORM library that let's you run SQL scripts on your NoSQL databases.",
    url: "https://www.npmjs.com/package/sql-to-nosql",
    pubDate: "Oct 9 2023",
    tags: "Open-source, Javascript, SQL, NoSQL",
  },
  {
    title: "Indie Hustles",
    description:
      "A product listing site for indie hackers. With IndieHacks, you can discover Indie version of popular SaaS alternatives.",
    url: "https://indiehustles.com/",
    pubDate: "Mar 13 2023",
    tags: "Product Listing, Community, NextJS, Supabase",
  },
];
export default function page() {
  return (
    <div>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            className="rounded-md transition p-4 lg:p-6 border border-transparent hover:border-zinc-400"
            key={project.title}
          >
            <a href={project.url} target="_blank" className="text-2xl">
              {project.title}
            </a>
            <p className="text-zinc-300 mb-4 font-light text-sm">
              {project.description}
            </p>
            <div className="flex space-x-2">
              {project.tags.split(",").map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full bg-purple-100 opacity-90 text-purple-800 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
