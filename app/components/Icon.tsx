import styled from "styled-components";
import { ExternalLink } from "./Links";

const Icon = styled.p`
  color: var(--txtgrey);
  transition: 0.2s ease;

  &:hover {
    color: var(--secondary);
    transform: scale(1.1);
    transition: 0.2s ease;
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
