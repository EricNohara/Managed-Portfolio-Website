import styled from "styled-components";

const Icon = styled.p`
  color: #b6c6cf;
  transition: color 0.2s ease;

  &:hover {
    color: white;
    transition: color 0.2s ease;
    cursor: pointer;
  }
`;

const IconLink = styled.a``;

type SocialIconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialIconLink({ href, label, children }: SocialIconLinkProps) {
  return (
    <Icon>
      <IconLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {children}
      </IconLink>
    </Icon>
  );
}

export { Icon, IconLink, SocialIconLink };
