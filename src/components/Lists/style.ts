import styled from "styled-components";

export const SList = styled.section`
  width: 80%;
  max-width: 1100px;
  padding: 2rem 0;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  h2 {
    margin-top: 10px;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 10px;
    border: 1px solid #ff7235;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 5px;
      background-color: #ff7235;
      border: 1px solid #ff7235;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: white;
      }

      &:hover {
        background-color: white;
        color: #ff7235;

        svg {
          color: #ff7235;
        }
      }
    }
  }

  h3 {
    text-align: center;
    margin-top: 30px;
  }

  button {
    margin-top: 10px;
    padding: 10px 40px 10px 40px;
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
`;
