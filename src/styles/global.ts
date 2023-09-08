import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root{
        --color-white: #FFFFFF;
        --color-gray: #F1F1F1;
        --color-red1: #FF0000;
        --color-red2: #A00606;
        --color-black: #000000;
        --color-green1:#2E8B57;
        --color-aqua1:#00FFFF
    }

    body{
        background: var(--color-gray);
    }
`