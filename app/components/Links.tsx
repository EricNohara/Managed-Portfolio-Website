import React from "react";

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  label?: string;
  children: React.ReactNode;
};

function ExternalLink({
  href,
  label = "",
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

export { ExternalLink };
