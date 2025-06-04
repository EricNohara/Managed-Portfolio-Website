"use client";

import styled from "styled-components";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import Link from "next/link";

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  background-color: #3d3d3d;
  position: sticky;
  top: 0;
  z-index: 1000;
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

const NavLink = styled(Link)`
  color: white;
  transition: color 0.2s ease;

  &:hover {
    color: red;
    transition: color 0.2s ease;
  }
`;

const ExternalNavLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: red;
    transition: color 0.2s ease;
  }
`;

export default function Navigation() {
  const userData: IUserData | null = useUserDataContext();

  console.log(userData?.resume_url);

  return (
    <NavBar>
      <NavList>
        <NavListItem>
          <NavLink href="#home">Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#about">About</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#experience">Experience</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#contact">Contact</NavLink>
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
