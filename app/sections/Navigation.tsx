"use client";

import styled from "styled-components";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  background-color: rgba(49, 49, 49, 0.99);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  gap: 15%;
  justify-content: center;
  list-style: none;
`;

const NavListItem = styled.li`
  font-size: 1.25rem;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? "var(--secondary)" : "white")};
  transition: color 0.2s ease;

  &:hover {
    color: var(--secondary);
  }
`;

const ExternalNavLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--secondary);
  }
`;

export default function Navigation() {
  const userData: IUserData | null = useUserDataContext();
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <NavBar>
      <NavList>
        <NavListItem>
          <NavLink href="#home" $active={activeSection === "home"}>
            Home
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#about" $active={activeSection === "about"}>
            About
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#experience" $active={activeSection === "experience"}>
            Experience
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#projects" $active={activeSection === "projects"}>
            Projects
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#contact" $active={activeSection === "contact"}>
            Contact
          </NavLink>
        </NavListItem>
        {userData && userData.resume_url && (
          <NavListItem>
            <ExternalNavLink
              href={userData.resume_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </ExternalNavLink>
          </NavListItem>
        )}
        {userData && userData.transcript_url && (
          <NavListItem>
            <ExternalNavLink
              href={userData.transcript_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Transcript
            </ExternalNavLink>
          </NavListItem>
        )}
      </NavList>
    </NavBar>
  );
}
