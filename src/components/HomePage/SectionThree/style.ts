import styled from "styled-components";

export const SHome = styled.section`
  width: 80%;
  margin: 80px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  article {
    flex: 1;
    min-width: 330px;

    h2 {
      font-size: max(60px, 7.4vw);
      line-height: 1.02;
      margin-top: 35px;
      color: #292830;
    }

    span {
      display: inline-block;
      color: #bdbdbd;
      font-size: max(1.7vw, 16px);
      margin-top: 0px;
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

  figure {
    flex: 1;
    min-width: 330px;
  }
`;
