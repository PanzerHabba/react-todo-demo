import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
		background-color: lightblue !important;
        padding: 0;
        height: 100%;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        /* font-size: 14px; */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    #root {
        display: flex;
        flex: 1;
        height: 100%;
    }
`;

export default GlobalStyle;
