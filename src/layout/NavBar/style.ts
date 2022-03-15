import styled from "styled-components";

export const SNavBar = styled.nav`
  width: 80%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  span {
    display: inline-block;
    background-color: #ff7235;
    font-weight: bold;
    padding: 15px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    color: white;
    text-align: center;
    font-size: 16px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px;

    li {
      cursor: pointer;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid #ff7235;
      }
    }
  }

  button {
    font-family: "Hind Siliguri", sans-serif;
    font-size: 18px;
    height: 40px;
    padding: 0px 40px 0px 40px;
    background-color: white;
    border: 1px solid #ff7235;
    border-radius: 5px;
    color: #ff7235;
    cursor: pointer;

    &:hover {
      background-color: #ff7235;
      color: white;
    }
  }
`;
