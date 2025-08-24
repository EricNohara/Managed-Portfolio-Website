import styled from "styled-components";
import React from "react";

const OutlinedButton = styled.button`
  border: 3px solid var(--secondary);
  border-radius: 5px;
  padding: 1% 7.5%;
  color: var(--secondary);
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 30px 5px var(--secondary);
    transform: translateY(4px);
    transition: box-shadow 0.2s, transform 0.2s;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, children }) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return <OutlinedButton onClick={handleClick}>{children}</OutlinedButton>;
};

export { ScrollButton, OutlinedButton };
