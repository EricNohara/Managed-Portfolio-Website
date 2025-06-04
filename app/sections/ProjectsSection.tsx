import styled from "styled-components";
import { OutlinedButton } from "../components/Buttons";
import { SocialIconLink } from "../components/Icon";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import { ExternalLink } from "../components/Links";
import { SectionContainer } from "../components/Containers";
import SectionTitle from "../components/SectionTitle";

export default function ProjectsSection() {
  const userData: IUserData | null = useUserDataContext();

  return (
    <SectionContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
    </SectionContainer>
  );
}
