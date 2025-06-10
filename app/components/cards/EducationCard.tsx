import { useUserDataContext } from "@/app/context/UserDataProvider";
import { IUserData } from "@/app/interfaces/IUserData";
import { InfoSubtitle } from "../Typography";
import CoursesTable from "../tables/CoursesTable";
import formatList from "@/utils/FormatList";
import {
  ExperienceSectionDate,
  ExperienceSectionName,
  ExperienceSubtitle,
} from "../Typography";
import {
  ExperienceInfoContainer,
  ExperienceContainer,
  ExperiencePairContainer,
} from "../Containers";
import { SocialIconLink } from "../Icon";
import SchoolIcon from "@mui/icons-material/School";
import { ExperienceTitleContainer } from "../Containers";

export default function EducationCard() {
  const userData: IUserData | null = useUserDataContext();

  return (
    <>
      <ExperienceTitleContainer>
        <InfoSubtitle>Education</InfoSubtitle>
        {userData && userData.transcript_url && (
          <SocialIconLink href={userData.transcript_url} label="resume">
            <SchoolIcon fontSize="large" />
          </SocialIconLink>
        )}
      </ExperienceTitleContainer>
      {userData &&
        userData.education &&
        userData.education.map((edu) => (
          <ExperienceContainer key={edu.institution}>
            <ExperienceInfoContainer>
              <ExperiencePairContainer>
                <ExperienceSectionName>{edu.institution}</ExperienceSectionName>
                <ExperienceSectionDate>
                  {edu.year_start && edu.year_end
                    ? `${edu.year_start} - `
                    : edu.year_start
                    ? edu.year_start
                    : ""}
                  {edu.year_end && edu.year_start && edu.year_end}
                </ExperienceSectionDate>
              </ExperiencePairContainer>
              <ExperiencePairContainer>
                <p>
                  <ExperienceSubtitle>Degree: </ExperienceSubtitle>
                  {edu.degree}
                </p>
                {edu.gpa && (
                  <p>
                    <ExperienceSubtitle>GPA: </ExperienceSubtitle>
                    {edu.gpa}
                  </p>
                )}
              </ExperiencePairContainer>
              <ExperiencePairContainer>
                {edu.majors.length > 0 && (
                  <p>
                    <ExperienceSubtitle>
                      {edu.majors.length > 1 ? "Majors" : "Major"}:{" "}
                    </ExperienceSubtitle>
                    {formatList(edu.majors)}
                  </p>
                )}
                {edu.minors.length > 0 && (
                  <p>
                    <ExperienceSubtitle>
                      {edu.minors.length > 1 ? "Minors" : "Minor"}:{" "}
                    </ExperienceSubtitle>
                    {formatList(edu.minors)}
                  </p>
                )}

                {edu.awards.length > 0 && (
                  <p>
                    <ExperienceSubtitle>
                      {edu.awards.length > 1 ? "Awards" : "Award"}:{" "}
                    </ExperienceSubtitle>
                    {formatList(edu.awards)}
                  </p>
                )}
              </ExperiencePairContainer>
            </ExperienceInfoContainer>
            {edu.courses.length > 0 && <CoursesTable courses={edu.courses} />}
          </ExperienceContainer>
        ))}
    </>
  );
}
