import styled from "styled-components";

export const SNewError = styled.span`
  display: flex;
  width: 280px;
  align-items: center;
  position: fixed;
  border-radius: 5px;
  padding: 10px;
  font-size: 13px;
  gap: 8px;
  background-color: rgba(255, 0, 0, 1);
  color: white;

  top: 5%;
  left: 50%;
  transform: translate(-50%, -5%);

  svg {
    font-size: 50px;
  }
`;
