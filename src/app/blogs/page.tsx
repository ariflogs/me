import { getBlogPosts } from "@/lib/blog";
import React from "react";

const blogs = [
  {
    title: "Build and deploy a blog site with Ghost, Docker & Caddy",
    slug: "ghost-docker-caddy",
    pubDate: "Feb 18, 2024",
    tags: "Blog, Podcast, GhostCMS",
  },
];

export default function page() {
  const blogs = getBlogPosts();

  return (
    <ul className="space-y-4">
      {blogs.map((blog) => (
        <li className="" key={blog.data.title}>
          <a href={`/blogs/${blog.data.slug}`} className="text-xl block">
            {blog.data.title}
          </a>
          <span className="text-sm text-zinc-400">{blog.data.pubDate}</span>
        </li>
      ))}
    </ul>
  );
}
