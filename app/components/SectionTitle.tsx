import styled from "styled-components";
import { ReactNode, useEffect, useRef, useState } from "react";
import { SectionTitleText, NormalText } from "./Typography";
import { ScrollAnimation } from "./ScrollAnimation";

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
`;

const TitleBlock = styled.div`
  display: inline-block;
  width: fit-content;
  text-align: center;
`;

const SectionTitleDivider = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "expanded",
})<{ expanded: boolean }>`
  background-color: var(--secondary);
  height: 5px;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 2rem;
  margin-top: 1rem;
  transform: scaleX(${({ expanded }) => (expanded ? 1 : 0)});
  transform-origin: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
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
    <ScrollAnimation style={{ width: "100%" }}>
      <SectionTitleContainer>
        <TitleBlock>
          <SectionTitleText>{children}</SectionTitleText>
          {subtitle && (
            <NormalText style={{ color: "var(--txtdarkgrey)" }}>
              {subtitle}
            </NormalText>
          )}
          <SectionTitleDivider ref={dividerRef} expanded={expanded} />
        </TitleBlock>
      </SectionTitleContainer>
    </ScrollAnimation>
  );
}
