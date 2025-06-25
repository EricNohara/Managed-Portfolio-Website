import styled from "styled-components";
import { titleFont } from "../style/fonts/localFonts";

export const HomeSectionText = styled.p`
  font-size: 3rem;
  color: white;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
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

  @media (max-width: 900px) {
    font-size: 4rem;
  }
  @media (max-width: 600px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

export const InfoSubtitle = styled.h2.attrs(() => ({
  className: titleFont.className,
}))`
  font-size: 2.5rem;
  color: white;

  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const AboutDescription = styled.h3`
  font-size: 1.25rem;
  font-style: italic;
  color: var(--txtdarkgrey);

  @media (max-width: 900px) {
    font-size: 1.15rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const AboutBio = styled.p`
  padding: 4.51%;
  background-color: var(--dblue);
  border-radius: 10px;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const ExperienceSectionName = styled.h2`
  font-size: 1.8rem;
  color: white;

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const ExperienceSectionDate = styled.h4`
  font-size: 1rem;
  color: var(--txtdarkgrey);
  font-style: italic;

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const AccordianSubtitle = styled.b`
  font-size: 1.2;
  color: white;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const ProjectTitle = styled.h2.attrs(() => ({
  className: titleFont.className,
}))`
  font-size: 2.5rem;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1.25rem;
  }
`;

export const ProjectSubtitle = styled.h4`
  font-size: 1rem;
  color: grey;
  font-style: italic;

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const NormalText = styled.p`
  color: var(--txtgrey);

  @media (max-width: 900px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;
