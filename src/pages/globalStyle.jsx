import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    ::root {
        font-size: 62.5%;
    }

    *,
    input,
    button,
    textarea {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    body {
        background-color: rgb(241, 241, 241);
    }

    &:link , &:active , &:visited{
                    color:black;
                    text-decoration:none;
                }

`;




export default GlobalStyle;