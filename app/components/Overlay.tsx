import styled from "styled-components";
import { lighten } from "@mui/material";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(4, 8, 13, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: var(--dblue2);
  color: white;
  padding: 2rem 3rem;
  border-radius: 10px;
  width: 60vw;
  max-height: 80vh;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  background: var(--secondary);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.25rem;
  cursor: pointer;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;

  &:hover {
    background-color: ${lighten("#ec2d47", 0.2)};
    transition: 0.2s ease;
  }
`;
