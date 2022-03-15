import styled from "styled-components";

export const SHome = styled.section`
  width: 80%;
  margin: 80px auto;
  display: flex;

  main {
    flex: 1;

    h1 {
      font-size: 6.2em;
      line-height: 6rem;
      margin-top: 35px;
      color: #292830;
    }

    span {
      display: inline-block;
      color: #bdbdbd;
      font-size: 23px;
      margin-top: 20px;
    }

    .btBox {
      button {
        padding: 10px 30px 10px 30px;
        margin-top: 40px;
        font-size: 35px;
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
  }
`;
