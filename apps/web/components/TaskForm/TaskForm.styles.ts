import styled from "styled-components";
import { variants } from "@catppuccin/palette";

const { macchiato } = variants;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${macchiato.text.hex};
    margin: 0;
    margin-bottom: 1em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
