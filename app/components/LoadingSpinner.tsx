import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const LoadingSpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingMessage = styled.p`
  font-size: 1.25 rem;
  margin-top: 1rem;
`;

export default function LoadingSpinner() {
  return (
    <LoadingSpinnerContainer>
      <CircularProgress size="3rem" color="error" />
      <LoadingMessage>Loading...</LoadingMessage>
    </LoadingSpinnerContainer>
  );
}
