import styled from "styled-components";

export const SStats = styled.section`
  width: 80%;
  max-width: 1100px;
  padding: 2rem 0;
  margin: 0 auto;

  border-bottom: 1px solid #e7e7e7;

  .statsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  button {
    display: block;
    margin: 20px auto;
    font-size: 20px;
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
