import styled from "styled-components";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import { SectionContainer } from "../components/Containers";
import SectionTitle from "../components/SectionTitle";
import EducationCard from "../components/cards/EducationCard";
import WorkCard from "../components/cards/WorkCard";

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
`;

export default function ExperienceSection() {
  const userData: IUserData | null = useUserDataContext();

  console.log(userData?.education);

  return (
    <SectionContainer id="experience" style={{ paddingTop: "60px" }}>
      <SectionTitle>Experience</SectionTitle>
      <ExperienceInfoContainer>
        <ExperienceContainer>
          <EducationCard />
        </ExperienceContainer>
        <ExperienceContainer>
          <WorkCard />
        </ExperienceContainer>
      </ExperienceInfoContainer>
    </SectionContainer>
  );
}
