import styled from "styled-components";

export const SStatsBox = styled.article`
  background-color: beige;
  width: 280px;
  text-align: center;
  border-radius: 5px;
  margin-top: 30px;

  h2 {
    background-color: #ff7235;
    border-radius: 5px 5px 0px 0px;
    color: white;
    padding: 8px;
  }

  .statsSpan {
    display: block;
    padding-top: 20px;
    color: white;
    background-color: rgba(255, 114, 53, 0.3);

    text-shadow: 1px 1px 1px black;
    border-radius: 0px 0px 5px 5px;
    font-size: 18px;
    font-weight: bold;

    .progress {
      position: relative;
      display: block;
      margin-top: 15px;
      overflow: hidden;

      progress {
        width: 80%;
        height: 50px;
      }

      span {
        position: absolute;
        text-shadow: none;
        font-weight: 400;
        color: black;
        font-size: 12px;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -45%);
      }
    }
  }
`;
