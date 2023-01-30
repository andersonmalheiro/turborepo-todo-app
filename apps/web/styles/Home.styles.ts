import styled from "styled-components";
import { variants } from "@catppuccin/palette";

const { macchiato } = variants;

export const Container = styled.main`
  height: 100%;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 2em;
`;

export const Grid = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.5em;
  color: ${macchiato.text.hex};
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Column = styled.article`
  border-radius: 6px;
  border: 1px solid ${macchiato.lavender.hex};
  height: fit-content;
  padding: 1em;
`;
