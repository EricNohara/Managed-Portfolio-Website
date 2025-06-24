import styled from "styled-components";
import { titleFont } from "../style/fonts/localFonts";

export const HomeSectionText = styled.p`
  font-size: 3rem;
  color: white;
`;

export const HomeSectionNameText = styled.span`
  color: var(--secondary);
`;

export const SectionTitleText = styled.h1.attrs(() => ({
  className: titleFont.className,
}))`
  font-size: 5rem;
  text-transform: uppercase;
  color: white;
`;

export const InfoSubtitle = styled.h2.attrs(() => ({
  className: titleFont.className,
}))`
  font-size: 2.5rem;
  color: white;
`;

export const AboutDescription = styled.h3`
  font-size: 1.25rem;
  font-style: italic;
  color: var(--txtdarkgrey);
`;

export const AboutBio = styled.p`
  padding: 5%;
  background-color: var(--dblue);
  border-radius: 10px;
`;

export const ExperienceSectionName = styled.h2`
  font-size: 1.8rem;
  color: white;
`;

export const ExperienceSectionDate = styled.h4`
  font-size: 1.1rem;
  color: var(--txtdarkgrey);
  font-style: italic;
`;

export const AccordianSubtitle = styled.b`
  font-size: 1.2;
  color: white;
`;

export const ProjectTitle = styled.h2.attrs(() => ({
  className: titleFont.className,
}))`
  font-size: 2.5rem;
`;

export const ProjectSubtitle = styled.h4`
  font-size: 1.1rem;
  color: grey;
  font-style: italic;
`;

export const NormalText = styled.p`
  color: var(--txtgrey);
`;
