import styled from "styled-components";
import { OutlinedButton } from "../components/Buttons";
import { SocialIconLink } from "../components/Icon";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import { ExternalLink } from "../components/Links";
import { SectionContainer } from "../components/Containers";
import SectionTitle from "../components/SectionTitle";
import { InfoSubtitle } from "../components/Typography";

const ExperienceInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 35em 35em;
  gap: 2em;
`;

const ExperienceContainer = styled.div`
  background-color: var(--dblue2);
  border-radius: 10px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InstitutionInfo = styled.div``;

export default function ExperienceSection() {
  const userData: IUserData | null = useUserDataContext();

  return (
    <SectionContainer id="experience" style={{ marginTop: "200px" }}>
      <SectionTitle>Experience</SectionTitle>
      <ExperienceInfoContainer>
        <ExperienceContainer>
          <InfoSubtitle>Education</InfoSubtitle>
          <EducationInfo>
            {userData &&
              userData.education &&
              userData.education.map((edu) => (
                <InstitutionInfo>{edu.institution}</InstitutionInfo>
              ))}
          </EducationInfo>
        </ExperienceContainer>
        <ExperienceContainer>
          <InfoSubtitle>Work</InfoSubtitle>
        </ExperienceContainer>
      </ExperienceInfoContainer>
    </SectionContainer>
  );
}
