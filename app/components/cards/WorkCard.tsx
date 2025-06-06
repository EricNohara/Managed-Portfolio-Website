import { useUserDataContext } from "@/app/context/UserDataProvider";
import { IUserData } from "@/app/interfaces/IUserData";
import { InfoSubtitle } from "../Typography";
import formatDate from "@/utils/FormatDate";
import {
  ExperienceSectionDate,
  ExperienceSectionName,
  ExperienceSubtitle,
} from "../Typography";
import { ExperiencePairContainer } from "../Containers";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { lighten } from "@mui/material/styles";

export default function WorkCard() {
  const userData: IUserData | null = useUserDataContext();

  return (
    <>
      <InfoSubtitle>Job</InfoSubtitle>
      {userData &&
        userData.experiences &&
        userData.experiences.map((exp) => (
          <Accordion
            key={exp.company}
            sx={{
              width: "100%",
              mb: 1,
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
                  <ExperienceSubtitle>{exp.job_title}</ExperienceSubtitle>
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
              {exp.job_description && exp.job_description !== "" ? (
                <div>
                  <b>Description: </b>
                  {exp.job_description}
                </div>
              ) : (
                <i>No description provided.</i>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
}
