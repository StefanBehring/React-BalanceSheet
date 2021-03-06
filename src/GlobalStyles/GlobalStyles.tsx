import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    :root {
    --color-primary: #79b4b7;
    --color-light: #fefbf3;
    --color-secondary: #f8f0df;
    --color-dark: #9d9d9d;

    --color-button-green: #27ae60;
    --color-button-green-hover: #2ecc71;
    --color-button-red: #c0392b;
    --color-button-red-hover: #e74c3c;
    --color-button-blue: #2980b9;
    --color-button-blue-hover: #3498db;
    --color-button-grey: #7f8c8d;
    --color-button-grey-hover: #95a5a6;
    --color-button-border: #000;

    --font-family: 'Roboto', sans-serif;
    }

    body {
    background-color: var(--color-primary);
    font-family: var(--font-family);
    margin: 0 auto;
    }
`

export default GlobalStyle
