import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Hind Siliguri';
  }

  .overlay-modal {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    max-width: 600px;
    background-color: white;
    border-radius: 5px;
    padding: 3rem;
    position: relative;
  }
`;
