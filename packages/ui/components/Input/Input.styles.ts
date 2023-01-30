import styled from "styled-components";
import { variants } from "@catppuccin/palette";

const { macchiato } = variants;

interface InputContainerProps {
  inline: boolean;
}

export const Container = styled.fieldset<InputContainerProps>`
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  gap: 5px;
  align-items: ${({ inline }) => (inline ? "center" : "start")};
  width: fit-content;
  position: relative;

  &:not(last-child)  {
    margin-bottom: 10px;
  }
`;

export const BaseInput = styled.input`
  border-radius: 6px;
  height: 30px;
  background: ${macchiato.surface1.hex};
  border: 2px solid ${macchiato.overlay0.hex};
  padding: 5px 10px;
  outline: none;
  max-width: calc(100% - 20px);
  min-width: fit-content;
  transition: all 0.3s ease-in-out;
  color: ${macchiato.text.hex};
  position: relative;

  &:focus,
  :active {
    border: 2px solid ${macchiato.lavender.hex};
  }

  &:invalid {
    border: 2px solid ${macchiato.red.hex};
  }
`;

export const Label = styled.label`
  font-size: 1.2em;
  font-weight: bold;
  color: ${macchiato.text.hex};
`;
