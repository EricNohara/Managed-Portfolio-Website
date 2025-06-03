import styled from "styled-components";
import { OutlinedButton } from "../components/Buttons";
import { SocialIconLink } from "../components/Icon";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";

const HomeSectionContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeSectionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
  margin-top: 15%;
`;

const HomeSectionText = styled.p`
  font-size: 3rem;
`;

const HomeSectionNameText = styled.span`
  color: red;
`;

const HomeSectionIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  margin-top: 10%;
`;

const socialLinks = [
  { key: "linkedin_url", label: "LinkedIn", icon: <>LinkedIn Icon</> },
  { key: "github_url", label: "GitHub", icon: <>GitHub Icon</> },
  { key: "instagram_url", label: "Instagram", icon: <>Instagram Icon</> },
  { key: "email", label: "Email", icon: <>Email Icon</> },
];

export default function HomeSection() {
  const userData: IUserData | null = useUserDataContext();

  return (
    <HomeSectionContainer>
      <HomeSectionTextContainer>
        {userData && userData.name && (
          <HomeSectionText>
            Hey I'm <HomeSectionNameText>{userData.name}</HomeSectionNameText>
          </HomeSectionText>
        )}
        <HomeSectionText>
          I'm a software developer and college student.
        </HomeSectionText>
      </HomeSectionTextContainer>
      <OutlinedButton>Find Out More</OutlinedButton>
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
