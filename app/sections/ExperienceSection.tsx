import styled from "styled-components";
import { useUserDataContext } from "../context/UserDataProvider";
import { IUserData } from "../interfaces/IUserData";
import { SectionContainer } from "../components/Containers";
import SectionTitle from "../components/SectionTitle";
import { InfoSubtitle } from "../components/Typography";
import CoursesTable from "../components/tables/CoursesTable";

const ExperienceInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 35em 35em;
  gap: 2em;
`;

const ExperienceContainer = styled.div`
  background-color: var(--dblue2);
  border-radius: 10px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const InstitutionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const InstitutionPairContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InstitutionName = styled.h2`
  font-size: 1.85rem;
`;

const InstitutionDate = styled.h4`
  font-size: 1.25rem;
  color: grey;
`;

export default function ExperienceSection() {
  const userData: IUserData | null = useUserDataContext();

  const formatList = (list: string[]) => {
    return list
      .map((item: string) =>
        item
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")
      )
      .join(", ");
  };

  console.log(userData?.education);

  return (
    <SectionContainer id="experience" style={{ paddingTop: "60px" }}>
      <SectionTitle>Experience</SectionTitle>
      <ExperienceInfoContainer>
        <ExperienceContainer>
          <InfoSubtitle>Education</InfoSubtitle>
          {userData &&
            userData.education &&
            userData.education.map((edu) => (
              <EducationInfo key={edu.institution}>
                <InstitutionInfo>
                  <InstitutionPairContainer>
                    <InstitutionName>{edu.institution}</InstitutionName>
                    <InstitutionDate>
                      {edu.year_start && edu.year_end
                        ? `${edu.year_start} - `
                        : edu.year_start
                        ? edu.year_start
                        : ""}
                      {edu.year_end && edu.year_start && edu.year_end}
                    </InstitutionDate>
                  </InstitutionPairContainer>
                  <InstitutionPairContainer>
                    <p>
                      <b>Degree: </b>
                      {edu.degree}
                    </p>
                    {edu.gpa && (
                      <p>
                        <b>GPA: </b>
                        {edu.gpa}
                      </p>
                    )}
                  </InstitutionPairContainer>
                  <InstitutionPairContainer>
                    {edu.majors.length > 0 && (
                      <p>
                        <b>{edu.majors.length > 1 ? "Majors" : "Major"}: </b>
                        {formatList(edu.majors)}
                      </p>
                    )}
                    {edu.minors.length > 0 && (
                      <p>
                        <b>{edu.minors.length > 1 ? "Minors" : "Minor"}: </b>
                        {formatList(edu.minors)}
                      </p>
                    )}

                    {edu.awards.length > 0 && (
                      <p>
                        <b>{edu.awards.length > 1 ? "Awards" : "Award"}: </b>
                        {formatList(edu.awards)}
                      </p>
                    )}
                  </InstitutionPairContainer>
                </InstitutionInfo>
                {edu.courses.length > 0 && (
                  <CoursesTable courses={edu.courses} />
                )}
              </EducationInfo>
            ))}
        </ExperienceContainer>
        <ExperienceContainer>
          <InfoSubtitle>Work</InfoSubtitle>
        </ExperienceContainer>
      </ExperienceInfoContainer>
    </SectionContainer>
  );
}
