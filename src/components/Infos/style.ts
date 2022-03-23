import styled from "styled-components";

export const SInfos = styled.section`
  width: 80%;
  max-width: 1100px;
  padding: 1rem 0;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  border-bottom: 1px solid #e7e7e7;
  border-top: 1px solid #e7e7e7;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;

    ul {
      list-style: none;
      display: flex;
      gap: 16px;
    }

    button {
      font-family: "Hind Siliguri", sans-serif;
      font-size: 16px;
      padding: 0px 20px 0px 20px;
      background-color: #ff7235;
      border: 1px solid #ff7235;
      border-radius: 5px;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: white;
        color: #ff7235;
      }
    }
  }
`;
