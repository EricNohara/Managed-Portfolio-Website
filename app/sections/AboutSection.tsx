import styled from "styled-components";
import { OutlinedButton } from "../components/Buttons";
import { SocialIconLink } from "../components/Icon";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import { ExternalLink } from "../components/Links";
import { SectionContainer } from "../components/Containers";
import SectionTitle from "../components/SectionTitle";
import ImageCard from "../components/ImageCard";
import SkillsTableCard from "../components/tables/SkillsTableCard";

import {
  InfoSubtitle,
  AboutDescription,
  AboutBio,
} from "../components/Typography";

const AboutInformationPanel = styled.div`
  display: grid;
  grid-template-columns: 20em 30em;
  grid-template-rows: 20em 35em;
  gap: 1.5em;
`;

const AboutInformationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutNameAndBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  width: 100%;
  height: 100%;
`;

const AboutNameAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
  width: 100%;
  height: 100%;
  padding: 5%;
  background-color: var(--dblue2);
  border-radius: 10px;
  box-sizing: border-box;
`;

const AboutInformationFullWidthItem = styled.div`
  grid-column: 1 / span 2;
  height: 100%;
  background-color: var(--dblue2);
  padding: 3% 4%;
  border-radius: 10px;
`;

export default function AboutSection() {
  const userData: IUserData | null = useUserDataContext();

  return (
    <SectionContainer id="about" style={{ paddingTop: "60px" }}>
      <SectionTitle>About Me</SectionTitle>
      <AboutInformationPanel>
        <AboutInformationItem>
          {userData && userData.portrait_url && (
            <ImageCard
              imageUrl={userData.portrait_url}
              flipped={true}
              link={userData.linkedin_url ? userData.linkedin_url : ""}
            />
          )}
        </AboutInformationItem>
        <AboutInformationItem>
          <AboutNameAndBioContainer>
            <AboutNameAndDescriptionContainer>
              <InfoSubtitle>{userData && userData.name}</InfoSubtitle>
              <AboutDescription>
                {userData && userData.location}
              </AboutDescription>
            </AboutNameAndDescriptionContainer>
            <AboutBio>
              I'm a rising senior at Boston University pursuing a master's
              degree in Computer Science. I'm interested in computer systems,
              web and game development, and machine learning!
            </AboutBio>
          </AboutNameAndBioContainer>
        </AboutInformationItem>
        <AboutInformationFullWidthItem>
          <InfoSubtitle>Technical Skills</InfoSubtitle>
          <SkillsTableCard />
        </AboutInformationFullWidthItem>
      </AboutInformationPanel>
    </SectionContainer>
  );
}
