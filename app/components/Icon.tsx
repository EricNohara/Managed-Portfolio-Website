import styled from "styled-components";
import { ExternalLink } from "./Links";

const Icon = styled.p`
  color: #b6c6cf;
  transition: color 0.2s ease;

  &:hover {
    color: white;
    transition: color 0.2s ease;
    cursor: pointer;
  }
`;

type SocialIconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialIconLink({ href, label, children }: SocialIconLinkProps) {
  return (
    <Icon>
      <ExternalLink href={href} aria-label={label}>
        {children}
      </ExternalLink>
    </Icon>
  );
}

export { Icon, SocialIconLink };
