import styled from "styled-components";
import { ScrollButton } from "../components/Buttons";
import { SocialIconLink } from "../components/Icon";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import { ExternalLink } from "../components/Links";
import { HomeSectionContainer } from "../components/Containers";
import { HomeSectionText, HomeSectionNameText } from "../components/Typography";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const HomeSectionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
  margin-top: 15%;
`;

const HomeSectionIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  margin-top: 10%;
`;

const socialLinks = [
  {
    key: "linkedin_url",
    label: "LinkedIn",
    icon: <LinkedInIcon sx={{ fontSize: "3.25rem" }} />,
  },
  {
    key: "github_url",
    label: "GitHub",
    icon: <GitHubIcon sx={{ fontSize: "3.25rem" }} />,
  },
  {
    key: "instagram_url",
    label: "Instagram",
    icon: <InstagramIcon sx={{ fontSize: "3.25rem" }} />,
  },
  {
    key: "email",
    label: "Email",
    icon: <EmailIcon sx={{ fontSize: "3.25rem" }} />,
  },
];

export default function HomeSection() {
  const userData: IUserData | null = useUserDataContext();

  return (
    <HomeSectionContainer id="home">
      <HomeSectionTextContainer>
        {userData && userData.name && (
          <HomeSectionText>
            Hey I'm{" "}
            <HomeSectionNameText>
              {userData.linkedin_url ? (
                <ExternalLink href={userData.linkedin_url}>
                  {userData.name}
                </ExternalLink>
              ) : (
                userData.name
              )}
            </HomeSectionNameText>
            .
          </HomeSectionText>
        )}
        <HomeSectionText>
          I'm a software developer and college student.
        </HomeSectionText>
      </HomeSectionTextContainer>
      <ScrollButton targetId="about">Find Out More</ScrollButton>
      <HomeSectionIconsContainer>
        {userData &&
          socialLinks.map(
            ({ key, label, icon }) =>
              userData[key as keyof IUserData] && (
                <SocialIconLink
                  key={key}
                  href={
                    key === "email"
                      ? `mailto:${userData[key as keyof IUserData]}`
                      : (userData[key as keyof IUserData] as string)
                  }
                  label={label}
                >
                  {icon}
                </SocialIconLink>
              )
          )}
      </HomeSectionIconsContainer>
    </HomeSectionContainer>
  );
}
