import styled from "styled-components";

export const HomeSectionContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  margin-bottom: 2rem;
  background: var(--dblue);
  padding: 1rem;
  border-radius: 10px;
`;

export const ExperienceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const ExperiencePairContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
