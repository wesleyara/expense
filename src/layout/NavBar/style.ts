import styled from "styled-components";

export const SNavBar = styled.header`
  width: 80%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  span {
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

  .btnMenu {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px;

    li {
      cursor: pointer;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid #ff7235;
      }
    }
  }

  .btnNavigate {
    font-family: "Hind Siliguri", sans-serif;
    font-size: 18px;
    height: 40px;
    padding: 0px 40px 0px 40px;
    background-color: white;
    border: 1px solid #ff7235;
    border-radius: 5px;
    color: #ff7235;
    cursor: pointer;

    &:hover {
      background-color: #ff7235;
      color: white;
    }
  }

  @media screen and (max-width: 650px) {
    width: 90%;

    .btnMenu {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: white;
      border: none;
      cursor: pointer;

      font-size: 30px;
    }

    .btnNavigate {
      display: none;
    }

    ul {
      display: block;
      position: absolute;
      width: 100%;
      top: 76px;
      right: 0px;
      background-color: white;
      height: 0px;
      z-index: 1000;
      transition: 1s;
      visibility: hidden;
      overflow: hidden;
    }

    nav.active ul {
      height: calc(100vh - 76px);
      visibility: visible;
      overflow: auto;
    }

    ul {
      padding: 1rem 30px;

      li {
        padding: 10px;
        border-bottom: 2px solid rgba(255, 114, 53, 0.5);

        &:hover {
          background-color: #ff7235;
          color: white;
        }
      }
    }
  }
`;
