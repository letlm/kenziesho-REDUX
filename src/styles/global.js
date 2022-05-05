import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        
    }

    :root{
        --white: #f5f5f5;
        --vanilla: #f1ede0;
        --vanillaTwo: #eee8cc;
        --black: #0c0d0d;
        --caramello: #ab9576;
        --gray:#c3c5c9;
        --caramelloTwo: rgb(173 134 79);
       
    }

    .toastify-color-progress-light {
        background-color: var(--white);
        box-shadow: 10px 10px 69px -2px rgba(186,143,78,0.47);
        color: var(--black);
        font-family: 'PT Serif', serif;
    }

    .Toastify__progress-bar-theme--light {
        background: var(--caramelloTwo);
    }

    body{
        background: var(--vanilla);
        color: var(--black);
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
    }

    body, input, button{
        font-family: 'PT Serif', serif;
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    li{
        list-style:none
    }

    
`;
