import styled from "styled-components";

export const SHome = styled.section`
  width: 80%;
  margin: 80px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  main {
    flex: 1;
    min-width: 330px;

    h1 {
      font-size: max(60px, 7.4vw);
      line-height: 1.02;
      margin-top: 35px;
      color: #292830;
    }

    span {
      display: inline-block;
      color: #bdbdbd;
      font-size: max(1.7vw, 16px);
      margin-top: 20px;
    }

    .btBox {
      button {
        padding: 1vw 1.3vw 1vw 1.3vw;
        margin-top: 40px;
        font-size: max(2.1vw, 18px);
        color: white;
        background-color: #ff7235;
        border: 2px solid #ff7235;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background-color: white;
          color: #ff7235;
        }
      }

      span {
        margin-top: 0px;
        margin-left: 20px;
      }
    }
  }

  aside {
    flex: 1;
    min-width: 330px;
  }
`;
