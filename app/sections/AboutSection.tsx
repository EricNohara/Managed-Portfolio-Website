import styled from "styled-components";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import { SectionContainer, SplitContainer } from "../components/Containers";
import SectionTitle from "../components/SectionTitle";
import ImageCard from "../components/cards/ImageCard";
import SkillsTableCard from "../components/tables/SkillsTableCard";
import { ScrollAnimation } from "../components/ScrollAnimation";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import formatPhoneNumber from "@/utils/FormatPhoneNumber";
import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";

import {
  InfoSubtitle,
  AboutDescription,
  AboutBio,
} from "../components/Typography";

const AboutInformationPanel = styled.div`
  display: grid;
  grid-template-columns: 20em 35em;
  grid-template-rows: 20em 35em;
  gap: 1.5em;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1em;
    padding: 0 1rem; // Add horizontal padding for mobile
  }
`;

const AboutInformationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    min-height: 130px;
    width: 100%;
  }
`;

const AboutNameAndBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    gap: 1em;
  }
`;

const AboutNameAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
  padding: 4.51%;
  background-color: var(--dblue);
  border-radius: 10px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    gap: 1.5em;
  }
`;

const AboutInformationFullWidthItem = styled.div`
  grid-column: 1 / span 2;
  height: 100%;
  background-color: var(--dblue2);
  padding: 3% 4%;
  border-radius: 10px;

  @media (max-width: 900px) {
    grid-column: 1 / span 1;
  }
`;

const FormattedPhoneIcon = styled(PhoneIcon)`
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    font-size: 1.1rem;
  }
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const FormattedEmailIcon = styled(EmailIcon)`
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    font-size: 1.1rem;
  }
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const ContactDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 5%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default function AboutSection() {
  const userData: IUserData | null = useUserDataContext();
  const [isWide, setIsWide] = useState(true);

  useEffect(() => {
    const checkWidth = () => setIsWide(window.innerWidth > 900);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <SectionContainer
      id="about"
      style={{
        paddingTop: "60px",
        background:
          "linear-gradient(to bottom, var(--dblue), var(--black), var(--bblue))",
      }}
    >
      <SectionTitle>About Me</SectionTitle>
      <AboutInformationPanel>
        {userData && userData.portrait_url && isWide && (
          <ScrollAnimation>
            <AboutInformationItem>
              <ImageCard
                imageUrl={userData.portrait_url}
                flipped={true}
                link={userData.linkedin_url ? userData.linkedin_url : ""}
              />
            </AboutInformationItem>
          </ScrollAnimation>
        )}
        <AboutInformationItem>
          <AboutNameAndBioContainer>
            <ScrollAnimation style={{ width: "100%", height: "100%" }}>
              <AboutNameAndDescriptionContainer>
                <div>
                  <InfoSubtitle>{userData && userData.name}</InfoSubtitle>
                  <SplitContainer>
                    <ContactDiv>
                      <AboutDescription>
                        <FormattedEmailIcon /> {userData && userData.email}
                      </AboutDescription>
                      <AboutDescription>
                        <FormattedPhoneIcon />{" "}
                        {userData &&
                          userData.phone_number &&
                          formatPhoneNumber(userData.phone_number)}
                      </AboutDescription>
                    </ContactDiv>
                  </SplitContainer>
                  <AboutDescription>
                    {userData && userData.location}
                  </AboutDescription>
                </div>
                {!isWide && userData?.portrait_url && (
                  <Avatar
                    src={userData.portrait_url}
                    sx={{
                      width: 150,
                      height: 150,
                      border: "5px solid var(--secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 0,
                      "@media (max-width: 700px)": {
                        width: 100,
                        height: 100,
                        border: "3px solid var(--secondary)",
                      },
                      "@media (max-width: 500px)": {
                        width: 70,
                        height: 70,
                        border: "2px solid var(--secondary)",
                      },
                    }}
                  />
                )}
              </AboutNameAndDescriptionContainer>
            </ScrollAnimation>
            <ScrollAnimation style={{ width: "100%", height: "100%" }}>
              <AboutBio>{userData && userData.bio && userData.bio}</AboutBio>
            </ScrollAnimation>
          </AboutNameAndBioContainer>
        </AboutInformationItem>
        <ScrollAnimation
          style={isWide ? { gridColumn: "1 / span 2" } : undefined}
        >
          <AboutInformationFullWidthItem>
            <InfoSubtitle className="mb-4 text-center">
              Technical Skills
            </InfoSubtitle>
            <SkillsTableCard />
          </AboutInformationFullWidthItem>
        </ScrollAnimation>
      </AboutInformationPanel>
    </SectionContainer>
  );
}
