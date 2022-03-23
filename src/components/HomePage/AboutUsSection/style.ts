import styled from "styled-components";

export const SHome = styled.article`
  width: 80%;
  max-width: 1100px;
  padding: 2rem 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  h2 {
    font-size: max(50px, 6.1vw);
    line-height: 1.02;
    flex: 2;
    min-width: 330px;
  }

  span {
    display: inline-block;
    color: #bdbdbd;
    font-size: max(1.7vw, 16px);
    margin-top: 20px;
    flex: 1;
    min-width: 330px;
  }

  @media screen and (min-width: 1365px) {
    h2 {
      font-size: 76px;
    }

    span {
      font-size: 21px;
    }

    .btBox {
      button {
        font-size: 26px;
        padding: 12px 16px 12px 16px;
      }
    }
  }
`;

export const SFeatures = styled.article`
  width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .cardFeatures {
    margin-top: 20px;
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
