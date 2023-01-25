import { createGlobalStyle } from "styled-components";
import { variants } from "@catppuccin/palette";

const { macchiato } = variants;

export const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${macchiato.base.hex};
        font-family: monospace;
    }
`;
