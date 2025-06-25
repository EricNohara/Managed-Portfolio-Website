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
import { createPortal } from "react-dom";
import ScrollAnimation from "../components/ScrollAnimation";

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 4rem;
  gap: 1.5rem;

  @media (max-width: 600px) {
    margin-right: 2rem;
    padding-left: 1.5rem;
    gap: 1rem;
  }
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

  @media (max-width: 900px) {
    font-size: 2rem;
    text-align: right;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const TitleLinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-right: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
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
  const [isSmall, setIsSmall] = useState<boolean>(false);

  // For fade in/out
  const [showOverlay, setShowOverlay] = useState(false);
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(false);
  const [modalProject, setModalProject] = useState<IUserProject | null>(null);

  // Vanta ref and effect
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    // Set initial value
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // @ts-expect-error vanta
    const NET = window.VANTA && window.VANTA.NET;
    // @ts-expect-error vanta
    const THREE = window.THREE;
    if (NET && THREE && vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: isSmall ? 100.0 : 200.0,
        minWidth: isSmall ? 100.0 : 200.0,
        scale: 0.5,
        scaleMobile: 1.0,
        points: 4.0,
        maxDistance: 23.0,
        spacing: 11.0,
        showDots: false,
        backgroundColor: "#000000",
        color: "#778da9",
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [isSmall]);

  // Handle overlay fade in/out
  useEffect(() => {
    if (selectedProject) {
      setModalProject(selectedProject);
      setShouldRenderOverlay(true);
      setTimeout(() => setShowOverlay(true), 10); // trigger fade-in
    } else if (showOverlay) {
      setShowOverlay(false); // trigger fade-out
      setTimeout(() => {
        setShouldRenderOverlay(false);
        setModalProject(null);
      }, 350); // match animation duration
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  return (
    <SectionContainer
      id="projects"
      style={{ paddingTop: "60px", position: "relative", overflow: "hidden" }}
    >
      <div
        ref={vantaRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <SectionTitle subtitle="click project name to view details">
          Projects
        </SectionTitle>
        <ProjectListContainer>
          <ScrollAnimation>
            <ProjectList>
              {userData &&
                userData.projects &&
                [...userData.projects]
                  .sort((a, b) => b.name.length - a.name.length)
                  .map((proj) => (
                    <ProjectListItem
                      key={proj.id}
                      onClick={() => setSelectedProject(proj)}
                    >
                      {proj.name}
                    </ProjectListItem>
                  ))}
            </ProjectList>
          </ScrollAnimation>
        </ProjectListContainer>
        {shouldRenderOverlay &&
          createPortal(
            <Overlay
              $visible={showOverlay}
              onClick={() => setSelectedProject(null)}
            >
              <Modal onClick={(e) => e.stopPropagation()}>
                {!isSmall && (
                  <CloseButton onClick={() => setSelectedProject(null)}>
                    <CloseIcon />
                  </CloseButton>
                )}
                {modalProject && (
                  <ProjectInfoContainer>
                    <TitleLinksContainer>
                      <ProjectTitle>{modalProject.name}</ProjectTitle>
                      <IconsContainer>
                        {modalProject.github_url && (
                          <SocialIconLink
                            href={modalProject.github_url}
                            label="Github URL"
                          >
                            <GitHubIcon fontSize="large" />
                          </SocialIconLink>
                        )}
                        {modalProject.demo_url && (
                          <SocialIconLink
                            href={modalProject.demo_url}
                            label="Demo URL"
                          >
                            <LinkIcon fontSize="large" />
                          </SocialIconLink>
                        )}
                      </IconsContainer>
                    </TitleLinksContainer>
                    <ProjectSubtitleContainer>
                      <ProjectSubtitle>
                        {formatDate(modalProject.date_start)} -{" "}
                        {formatDate(modalProject.date_end)}
                      </ProjectSubtitle>
                      <ProjectSubtitle>
                        {joinSubtitle(
                          modalProject.languages_used,
                          modalProject.frameworks_used,
                          modalProject.technologies_used
                        )}
                      </ProjectSubtitle>
                    </ProjectSubtitleContainer>
                    {modalProject.thumbnail_url && (
                      <ImageCard imageUrl={modalProject.thumbnail_url} />
                    )}
                    <NormalText>{modalProject.description}</NormalText>
                  </ProjectInfoContainer>
                )}
              </Modal>
            </Overlay>,
            document.body
          )}
      </div>
    </SectionContainer>
  );
}
