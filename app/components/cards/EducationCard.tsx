import { useUserDataContext } from "@/app/context/UserDataProvider";
import { IUserData } from "@/app/interfaces/IUserData";
import CoursesTable from "../tables/CoursesTable";
import formatList from "@/utils/FormatList";
import {
  ExperienceSectionDate,
  ExperienceSectionName,
  AccordianSubtitle,
  InfoSubtitle,
} from "../Typography";
import {
  ExperiencePairContainer,
  ExperienceTitleContainer,
} from "../Containers";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import { SocialIconLink } from "../Icon";

export default function EducationCard() {
  const userData: IUserData | null = useUserDataContext();

  return (
    <>
      <ExperienceTitleContainer>
        <InfoSubtitle>Education</InfoSubtitle>
        {userData && userData.transcript_url && (
          <SocialIconLink href={userData.transcript_url} label="transcript">
            <SchoolIcon fontSize="large" />
          </SocialIconLink>
        )}
      </ExperienceTitleContainer>
      {userData &&
        userData.education &&
        userData.education.map((edu) => (
          <div style={{ width: "100%" }} key={edu.institution}>
            <Accordion
              sx={{
                width: "100%",
                backgroundColor: "var(--dblue)",
                color: "white",
                borderRadius: "10px",
                transition: "background-color 0.2s",
                "&:hover": {
                  backgroundColor: "#222f44",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon fontSize="large" />}
                sx={{
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    transition: "color 0.2s ease",
                  },
                  "&:hover .MuiAccordionSummary-expandIconWrapper": {
                    color: "#ec2d47",
                  },
                }}
              >
                <div style={{ width: "100%" }}>
                  <ExperienceSectionName>
                    {edu.institution}
                  </ExperienceSectionName>
                  <ExperiencePairContainer>
                    <AccordianSubtitle>
                      {edu.degree && edu.degree}
                    </AccordianSubtitle>
                    <ExperienceSectionDate>
                      {edu.year_start && edu.year_end
                        ? `${edu.year_start} - ${edu.year_end}`
                        : edu.year_start
                        ? edu.year_start
                        : ""}
                    </ExperienceSectionDate>
                  </ExperiencePairContainer>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <ExperiencePairContainer className="mb-2">
                  <p>
                    <AccordianSubtitle>Degree: </AccordianSubtitle>
                    {edu.degree}
                  </p>
                  {edu.gpa && (
                    <p>
                      <AccordianSubtitle>GPA: </AccordianSubtitle>
                      {edu.gpa}
                    </p>
                  )}
                </ExperiencePairContainer>
                {edu.majors.length > 0 && (
                  <p className="mb-2">
                    <AccordianSubtitle>
                      {edu.majors.length > 1 ? "Majors" : "Major"}:{" "}
                    </AccordianSubtitle>
                    {formatList(edu.majors)}
                  </p>
                )}
                {edu.minors.length > 0 && (
                  <p className="mb-2">
                    <AccordianSubtitle>
                      {edu.minors.length > 1 ? "Minors" : "Minor"}:{" "}
                    </AccordianSubtitle>
                    {formatList(edu.minors)}
                  </p>
                )}
                {edu.awards.length > 0 && (
                  <p className="mb-2">
                    <AccordianSubtitle>
                      {edu.awards.length > 1 ? "Awards" : "Award"}:{" "}
                    </AccordianSubtitle>
                    {formatList(edu.awards)}
                  </p>
                )}
                {edu.courses.length > 0 && (
                  <CoursesTable courses={edu.courses} />
                )}
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
    </>
  );
}
