import styled from "styled-components";
import { ReactNode, useEffect, useRef, useState } from "react";
import { SectionTitleText } from "./Typography";

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
`;

const SectionTitleDivider = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "expanded",
})<{ expanded: boolean }>`
  background-color: var(--secondary);
  height: 5px;
  width: ${({ expanded }) => (expanded ? "100%" : "0%")};
  border-radius: 2px;
  margin-bottom: 2rem;
  margin-top: 1rem;
  transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
`;

type SectionTitleProps = {
  children: ReactNode;
  subtitle?: string;
};

export default function SectionTitle({
  children,
  subtitle,
}: SectionTitleProps) {
  const [expanded, setExpanded] = useState(false);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setExpanded(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (dividerRef.current) observer.observe(dividerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionTitleContainer>
      <SectionTitleText>{children}</SectionTitleText>
      {subtitle && (
        <p style={{ fontSize: "1.2rem", color: "grey" }}>{subtitle}</p>
      )}
      <SectionTitleDivider ref={dividerRef} expanded={expanded} />
    </SectionTitleContainer>
  );
}
