"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { highlight } from "sugar-high";

function RenderHighlightedCode({ children }: { children?: React.ReactNode }) {
  if (!children) {
    return <br />;
  }

  const codeHTML = highlight(children.toString());
  return (
    <div className="bg-zinc-900 rounded-lg p-4">
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} />;
    </div>
  );
}

export function RenderMdx({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <MDXRemote
      {...source}
      components={{
        code: RenderHighlightedCode,
      }}
    />
  );
}
