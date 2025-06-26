import styled from "styled-components";
import { ExternalLink } from "./Links";

const Icon = styled.p`
  color: var(--txtgrey);
  transition: color 0.2s ease;

  &:hover {
    color: var(--secondary);
    transition: color 0.2s ease;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    svg {
      font-size: 2rem;
    }
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
      <ExternalLink href={href} label={label}>
        {children}
      </ExternalLink>
    </Icon>
  );
}

export { Icon, SocialIconLink };
