import styled from "styled-components";

export const SHome = styled.section`
  width: 80%;
  margin: 80px auto;
  display: flex;

  main {
    flex: 1;
    margin-left: 20px;

    h1 {
      font-size: 6em;
      line-height: 6rem;
      margin-top: 35px;
      color: #292830;
    }

    span {
      display: inline-block;
      color: #bdbdbd;
      font-size: 23px;
      margin-top: 0px;
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
    }

    .linkSpan {
      display: flex;
      align-items: center;
      background-color: white;
      gap: 10px;
      border: none;
      color: #ff7235;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  aside {
    flex: 1;
  }
`;
