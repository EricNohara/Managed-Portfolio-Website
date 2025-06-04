import styled from "styled-components";
import { ReactNode } from "react";
import { SectionTitleText } from "./Typography";

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 2%;
`;

const SectionTitleDivider = styled.div`
  background-color: red;
  height: 5px;
  width: 100%;
  border-radius: 2px;
`;

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      <SectionTitleText>{children}</SectionTitleText>
      <SectionTitleDivider />
    </SectionTitleContainer>
  );
}
