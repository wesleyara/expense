import styled from "styled-components";

export const SHome = styled.section`
  width: 80%;
  max-width: 1100px;
  padding: 2rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  main {
    flex: 1;
    min-width: 300px;

    h1 {
      font-size: max(50px, 6.1vw);
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
    min-width: 300px;

    img {
      max-width: 100%;
    }
  }

  @media screen and (min-width: 1365px) {
    main {
      h1 {
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
  }
`;
