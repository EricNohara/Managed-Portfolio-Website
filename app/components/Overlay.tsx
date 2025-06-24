import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.96) translateY(20px);}
  to { opacity: 1; transform: scale(1) translateY(0);}
`;

const fadeOut = keyframes`
  from { opacity: 1; backdrop-filter: blur(8px);}
  to { opacity: 0; backdrop-filter: blur(0px);}
`;

export const Overlay = styled.div<{ $visible?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(4, 8, 13, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
  animation: ${({ $visible }) =>
    $visible
      ? css`
          ${fadeIn} 0.35s cubic-bezier(0.4,0,0.2,1) forwards
        `
      : css`
          ${fadeOut} 0.35s cubic-bezier(0.4,0,0.2,1) forwards
        `};
  backdrop-filter: blur(8px);
  transition: backdrop-filter 0.35s, opacity 0.35s;
`;

export const Modal = styled.div`
  background: radial-gradient(
    circle at center,
    var(--dblue2) 50%,
    var(--black) 100%
  );
  color: white;
  padding: 3rem;
  border-radius: 10px;
  width: 60vw;
  max-height: 80vh;
  overflow-y: auto;
  border: 2px solid var(--dsecondary);
  z-index: 100000;
  animation: ${fadeIn} 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(2px);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: var(--dblue);
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--txtgrey);
  transition: background 0.2s, color 0.2s;
  z-index: 2;
  &:hover {
    background: var(--secondary);
    color: white;
  }
`;
