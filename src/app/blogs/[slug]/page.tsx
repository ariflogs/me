import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import { getBlogBySlug } from "@/lib/blog";
import { BlogPostHeader } from "@/components/blog/BlogHeader";
import { RenderMdx } from "@/components/mdx";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const {
    data: { title, pubDate },
    content,
  } = blog;
  const serializedContent = await serialize(content);

  return (
    <div>
      <BlogPostHeader title={title} pubDate={pubDate} />
      <div className="divider h-12"></div>
      <article>
        <RenderMdx source={serializedContent} />
      </article>
    </div>
  );
}
