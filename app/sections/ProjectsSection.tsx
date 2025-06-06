import styled from "styled-components";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData, IUserProject } from "../interfaces/IUserData";
import { SectionContainer } from "../components/Containers";
import SectionTitle from "../components/SectionTitle";
import { Modal, Overlay, CloseButton } from "../components/Overlay";
import ImageCard from "../components/cards/ImageCard";
import formatDate from "@/utils/FormatDate";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SocialIconLink } from "../components/Icon";
import { ProjectTitle, ProjectSubtitle } from "../components/Typography";
import {
  ProjectListContainer,
  ProjectInfoContainer,
  ProjectSubtitleContainer,
  IconsContainer,
} from "../components/Containers";

import React, { useState } from "react";

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 4rem;
  gap: 1.5rem;
`;

const ProjectListItem = styled.li`
  font-size: 2.25rem;
  transition: color 0.2s ease;
  transition: transform 0.2s ease;

  &:hover {
    color: var(--secondary);
    cursor: pointer;
    transform: translateX(-1rem);
    transition: color 0.2s ease;
    transition: transform 0.2s ease;
  }
`;

const joinSubtitle = (
  languages: string[] | null,
  frameworks: string[] | null,
  technologies: string[] | null
) => {
  return [languages, frameworks, technologies]
    .filter(Boolean)
    .flatMap((arr) => arr || [])
    .join(" | ");
};

export default function ProjectsSection() {
  const userData: IUserData | null = useUserDataContext();
  const [selectedProject, setSelectedProject] = useState<null | IUserProject>(
    null
  );

  return (
    <SectionContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectListContainer>
        <ProjectList>
          {userData &&
            userData.projects &&
            [...userData.projects]
              .sort((a, b) => b.name.length - a.name.length)
              .map((proj) => (
                <ProjectListItem
                  key={proj.name}
                  onClick={() => setSelectedProject(proj)}
                >
                  {proj.name}
                </ProjectListItem>
              ))}
        </ProjectList>
      </ProjectListContainer>
      {selectedProject && (
        <Overlay onClick={() => setSelectedProject(null)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedProject(null)}>
              <CloseIcon />
            </CloseButton>
            <ProjectInfoContainer>
              <div
                style={{ display: "flex", gap: "2rem", paddingRight: "2rem" }}
              >
                <ProjectTitle>{selectedProject.name}</ProjectTitle>
                <IconsContainer>
                  {selectedProject.github_url && (
                    <SocialIconLink
                      href={selectedProject.github_url}
                      label="Github URL"
                    >
                      <GitHubIcon fontSize="large" />
                    </SocialIconLink>
                  )}
                  {selectedProject.demo_url && (
                    <SocialIconLink
                      href={selectedProject.demo_url}
                      label="Demo URL"
                    >
                      <LinkIcon fontSize="large" />
                    </SocialIconLink>
                  )}
                </IconsContainer>
              </div>
              <ProjectSubtitleContainer>
                <ProjectSubtitle>
                  {formatDate(selectedProject.date_start)} -{" "}
                  {formatDate(selectedProject.date_end)}
                </ProjectSubtitle>
                <ProjectSubtitle>
                  {joinSubtitle(
                    selectedProject.languages_used,
                    selectedProject.frameworks_used,
                    selectedProject.technologies_used
                  )}
                </ProjectSubtitle>
              </ProjectSubtitleContainer>
              {selectedProject.thumbnail_url && (
                <ImageCard imageUrl={selectedProject.thumbnail_url} />
              )}
              {selectedProject.description}
            </ProjectInfoContainer>
          </Modal>
        </Overlay>
      )}
    </SectionContainer>
  );
}
