import styled from "styled-components";

const OutlinedButton = styled.button`
  border: 3px solid red;
  border-radius: 5px;
  padding: 1% 5%;
  color: red;

  &:hover {
    cursor: pointer;
  }
`;

export { OutlinedButton };
