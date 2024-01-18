import React from "react";

export default function HeaderLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div>
      <a href={href} {...props}>
        {children}
      </a>
    </div>
  );
}
