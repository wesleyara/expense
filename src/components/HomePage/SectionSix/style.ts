import styled from "styled-components";

export const SHome = styled.article`
  width: 80%;
  margin: 80px auto;
  display: flex;

  h1 {
    font-size: 6rem;
    line-height: 6.2rem;
    flex: 2;
  }

  span {
    display: inline-block;
    color: #bdbdbd;
    font-size: 23px;
    margin-top: 20px;
    flex: 1;
  }
`;

export const SFeatures = styled.article`
  width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;

  .cardFeatures {
    width: 288px;
    text-align: center;
    padding: 70px 50px 70px 50px;
    background-color: rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    div {
      padding: 10px;
      display: inline-block;
      overflow: hidden;
      border-radius: 50%;

      svg {
        display: flex;
        font-size: 35px;
      }
    }

    span {
      color: #bdbdbd;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
