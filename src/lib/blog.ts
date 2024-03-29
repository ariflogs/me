import { BlogPost } from "@/types/Blog";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const blogsDirPath = join(process.cwd(), "_blogs");

export function getBlogBySlug(slug: string): BlogPost {
  const fullPath = join(blogsDirPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {
    data: { title, pubDate },
    content,
  } = matter(fileContents);

  return { data: { slug, title, pubDate }, content };
}

export function getBlogPosts(): BlogPost[] {
  const fileTitles = fs.readdirSync(blogsDirPath);

  return fileTitles.map((fTitle) => {
    const file = fs.readFileSync(join(blogsDirPath, fTitle));
    const {
      data: { title, pubDate },
      content,
    } = matter(file);
    // const { title, pubDate } = data;

    return {
      data: {
        slug: fTitle.replace(".mdx", ""),
        title,
        pubDate,
      },
      content,
    };
  });
}
