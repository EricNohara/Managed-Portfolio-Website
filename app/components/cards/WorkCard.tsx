import { useUserDataContext } from "@/app/context/UserDataProvider";
import { IUserData } from "@/app/interfaces/IUserData";
import { InfoSubtitle } from "../Typography";
import formatDate from "@/utils/FormatDate";
import {
  ExperienceSectionDate,
  ExperienceSectionName,
  AccordianSubtitle,
  NormalText,
} from "../Typography";
import { ExperiencePairContainer } from "../Containers";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { lighten } from "@mui/material/styles";
import { ExperienceTitleContainer } from "../Containers";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { SocialIconLink } from "../Icon";

export default function WorkCard() {
  const userData: IUserData | null = useUserDataContext();

  return (
    <>
      <ExperienceTitleContainer>
        <InfoSubtitle>Work</InfoSubtitle>
        {userData && userData.resume_url && (
          <SocialIconLink href={userData.resume_url} label="resume">
            <ContactPageIcon fontSize="large" />
          </SocialIconLink>
        )}
      </ExperienceTitleContainer>

      {userData &&
        userData.experiences &&
        userData.experiences.map((exp) => (
          <div key={exp.company}>
            <Accordion
              sx={{
                width: "100%",
                backgroundColor: "var(--dblue)",
                color: "white",
                borderRadius: "10px",
                transition: "background-color 0.2s",
                "&:hover": {
                  backgroundColor: lighten("#1b263b", 0.05), // adjust to a lighter shade of your --dblue
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
                    color: "#ec2d47", // Your red color
                  },
                }}
              >
                <div style={{ width: "100%" }}>
                  <ExperienceSectionName>{exp.company}</ExperienceSectionName>
                  <ExperiencePairContainer>
                    <AccordianSubtitle>{exp.job_title}</AccordianSubtitle>
                    <ExperienceSectionDate>
                      {exp.date_start && exp.date_end
                        ? `${formatDate(exp.date_start)} - ${formatDate(
                            exp.date_end
                          )}`
                        : exp.date_start
                        ? formatDate(exp.date_start)
                        : ""}
                    </ExperienceSectionDate>
                  </ExperiencePairContainer>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <NormalText>
                  {exp.job_description && exp.job_description !== ""
                    ? exp.job_description
                    : "No description provided."}
                </NormalText>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
    </>
  );
}
