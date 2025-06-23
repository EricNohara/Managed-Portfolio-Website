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
import {
  ProjectTitle,
  ProjectSubtitle,
  NormalText,
} from "../components/Typography";
import {
  ProjectListContainer,
  ProjectInfoContainer,
  ProjectSubtitleContainer,
  IconsContainer,
} from "../components/Containers";

import React, { useState, useEffect, useRef } from "react";

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

  // Vanta ref and effect
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // @ts-ignore
    const NET = window.VANTA && window.VANTA.NET;
    // @ts-ignore
    const THREE = window.THREE;
    if (NET && THREE && vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        points: 5.0,
        maxDistance: 26.0,
        spacing: 16.0,
        showDots: false,
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
    <SectionContainer
      id="projects"
      style={{ paddingTop: "60px", position: "relative", overflow: "hidden" }}
    >
      {/* Vanta background */}
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
      {/* Content above Vanta */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <SectionTitle subtitle="click project name to view details">
          Projects
        </SectionTitle>
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
                <NormalText>{selectedProject.description}</NormalText>
              </ProjectInfoContainer>
            </Modal>
          </Overlay>
        )}
      </div>
    </SectionContainer>
  );
}
