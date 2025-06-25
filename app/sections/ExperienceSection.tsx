import styled from "styled-components";
import { SectionContainer } from "../components/Containers";
import SectionTitle from "../components/SectionTitle";
import EducationCard from "../components/cards/EducationCard";
import WorkCard from "../components/cards/WorkCard";
import ScrollAnimation from "../components/ScrollAnimation";

const ExperienceInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 35em 35em;
  gap: 4em;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1em;
    padding: 0 1rem;
  }
`;

const ExperienceContainer = styled.div`
  background-color: var(--dblue2);
  border-radius: 10px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export default function ExperienceSection() {
  return (
    <SectionContainer
      id="experience"
      style={{
        paddingTop: "60px",
        background: "linear-gradient(to top, var(--black), var(--bblue))",
      }}
    >
      <SectionTitle>Experience</SectionTitle>
      <ExperienceInfoContainer>
        <ScrollAnimation>
          <ExperienceContainer>
            <EducationCard />
          </ExperienceContainer>
        </ScrollAnimation>
        <ScrollAnimation>
          <ExperienceContainer>
            <WorkCard />
          </ExperienceContainer>
        </ScrollAnimation>
      </ExperienceInfoContainer>
    </SectionContainer>
  );
}
