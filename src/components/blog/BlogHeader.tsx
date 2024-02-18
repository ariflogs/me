type Props = {
  title: string;
  pubDate: string;
};

export function BlogPostHeader({ title, pubDate }: Props) {
  return (
    <>
      <h1>{title}</h1>
      <span className="text-sm text-zinc-400">{pubDate}</span>
    </>
  );
}
