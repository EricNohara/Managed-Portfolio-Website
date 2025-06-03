"use client";

import { useUserDataContext } from "./context/UserDataProvider";
import { IUserData } from "./interfaces/IUserData";
import Navigation from "./components/Navigation";
import HomeSection from "./sections/HomeSection";

export default function Home() {
  const userData: IUserData | null = useUserDataContext();

  if (!userData) return <p>Loading...</p>;

  return (
    <div>
      <HomeSection />
      <Navigation />
      {/* <h1>{userData.name}</h1>
      <p>{userData.email}</p> */}
    </div>
  );
}
