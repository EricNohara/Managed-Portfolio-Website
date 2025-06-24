"use client";

import { useUserDataContext } from "./context/UserDataProvider";
import { IUserData } from "./interfaces/IUserData";
import Navigation from "./sections/Navigation";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import { HomeSectionContainer } from "./components/Containers";
import LoadingSpinner from "./components/LoadingSpinner";
import Footer from "./components/Footer";

export default function Home() {
  const userData: IUserData | null = useUserDataContext();

  console.log(userData);

  if (!userData)
    return (
      <HomeSectionContainer
        style={{
          background:
            "radial-gradient(circle at center, var(--dblue2) 20%, var(--black) 100%)",
        }}
      >
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
      <Footer />
    </div>
  );
}
