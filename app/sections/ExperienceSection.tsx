import styled from "styled-components";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import { SectionContainer } from "../components/Containers";
import SectionTitle from "../components/SectionTitle";
import EducationCard from "../components/cards/EducationCard";
import WorkCard from "../components/cards/WorkCard";
import ScrollAnimation from "../components/ScrollAnimation";

const ExperienceInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 35em 35em;
  gap: 4em;
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
  const userData: IUserData | null = useUserDataContext();

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
