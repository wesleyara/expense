import styled from "styled-components";

export const SHome = styled.section`
  width: 80%;
  max-width: 1100px;
  padding: 2rem 0;
  margin: 0 auto;

  h2 {
    font-size: max(50px, 7.4vw);
    line-height: 1.02;
    text-align: center;
  }

  div {
    background-color: rgba(0, 0, 0, 0.02);
    width: 288px;
    margin: 50px auto;
    padding: 50px;

    h3 {
      font-size: 25px;
    }

    svg {
      font-size: 30px;
      color: #ff7235;
    }

    ul {
      margin-left: 20px;
      list-style-type: circle;
    }

    span {
      display: inline-block;
      margin-top: 20px;
    }

    button {
      margin-top: 10px;
      padding: 10px 30px 10px 30px;
      color: #ff7235;
      background-color: white;
      border: 2px solid #ff7235;
      border-radius: 5px;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;

      &:hover {
        background-color: #ff7235;
        color: white;
      }

      svg {
        font-size: 16px;
      }
    }
  }

  @media screen and (min-width: 1365px) {
    h2 {
      font-size: 92px;
    }
  }
`;
