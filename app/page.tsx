"use client";

import { useUserDataContext } from "./context/UserDataProvider";
import { IUserData } from "./interfaces/IUserData";
import Navigation from "./sections/Navigation";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import {
  HomeSectionContainer,
  SectionContainer,
} from "./components/Containers";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Home() {
  const userData: IUserData | null = useUserDataContext();

  if (!userData)
    return (
      <HomeSectionContainer>
        <LoadingSpinner />
      </HomeSectionContainer>
    );

  return (
    <div>
      <HomeSection />
      <Navigation />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      {/* <h1>{userData.name}</h1>
      <p>{userData.email}</p> */}
    </div>
  );
}
