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

import { useEffect, useRef } from "react";

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
  gap: 12%;
  margin-top: 12%;
`;

const socialLinks = [
  {
    key: "linkedin_url",
    label: "Eric Nohara-LeClair on LinkedIn",
    icon: <LinkedInIcon sx={{ fontSize: "3.25rem" }} />,
  },
  {
    key: "github_url",
    label: "Eric Nohara-LeClair on GitHub",
    icon: <GitHubIcon sx={{ fontSize: "3.25rem" }} />,
  },
  {
    key: "instagram_url",
    label: "Eric Nohara-LeClair on Instagram",
    icon: <InstagramIcon sx={{ fontSize: "3.25rem" }} />,
  },
  {
    key: "email",
    label: "Eric Nohara-LeClair on Email",
    icon: <EmailIcon sx={{ fontSize: "3.25rem" }} />,
  },
];

export default function HomeSection() {
  const userData: IUserData | null = useUserDataContext();
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    // @ts-expect-error vanta
    const WAVES = window.VANTA && window.VANTA.WAVES;
    // @ts-expect-error vanta
    const THREE = window.THREE;
    if (WAVES && THREE && vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x30a17,
        shininess: 22.0,
        waveHeight: 40.0,
        waveSpeed: 0.65,
        zoom: 0.65,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <HomeSectionContainer
      id="home"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        ref={vantaRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HomeSectionTextContainer>
          {userData && userData.name && (
            <HomeSectionText>
              Hey I&apos;m{" "}
              <HomeSectionNameText>
                {userData.linkedin_url ? (
                  <ExternalLink
                    href={userData.linkedin_url}
                    label="Eric Nohara-LeClair on LinkedIn"
                  >
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
            I&apos;m a software developer and college student.
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
      </div>
    </HomeSectionContainer>
  );
}
