import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    
    *, button, input {
        border: 0;
        outline: 0;
    }
    html, body, #root {
        height: 100%;
    }

    :root {

    --white: #fff;
    --gray: #212121;
    --graylight: #9E9E9E;
    --borders: #424242

  }
`;

const ContainerGlobal = styled.div`
    width: 100%;
    height: auto;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export { GlobalStyle, ContainerGlobal };