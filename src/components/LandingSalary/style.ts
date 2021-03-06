import styled from "styled-components";

export const SHome = styled.section`
  width: 80%;
  max-width: 1100px;
  padding: 2rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  article {
    flex: 1;
    min-width: 300px;

    div {
      .logo {
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
    }
    form {
      margin-bottom: 20px;

      p {
        margin-top: 10px;
      }

      div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 44px;
          width: 44px;

          background-color: #ff7235;
          color: white;
          border: none;
          border-radius: 5px 0px 0px 5px;
        }

        input {
          border: 1px solid #ff7235;
          border-radius: 0px 5px 5px 0px;
          padding: 10px;
          width: 200px;

          -moz-appearance: textfield;
          appearance: textfield;

          &:focus {
            outline: 1px;
          }

          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        }
      }

      .start {
        display: block;
        margin-top: 10px;
        border-radius: 5px;
        height: 44px;
        width: 243px;
        cursor: pointer;
        border: 1px solid #ff7235;
        background-color: #ff7235;
        color: white;

        &:hover {
          background-color: white;
          color: #ff7235;
        }
      }
    }
  }

  figure {
    flex: 1;
    min-width: 300px;

    img {
      max-width: 100%;
    }
  }
`;
