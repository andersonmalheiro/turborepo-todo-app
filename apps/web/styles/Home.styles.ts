import styled from "styled-components";
import { variants } from "@catppuccin/palette";

const { macchiato } = variants;

export const Container = styled.div`
  background: ${macchiato.base.hex};
  height: 100vh;
  padding: 1em;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2em;
  color: ${macchiato.text.hex};
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
