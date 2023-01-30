import styled from "styled-components";
import { variants } from "@catppuccin/palette";

const { macchiato } = variants;

export const BaseButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-weight: bold;
  height: 30px;

  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${macchiato.blue.hex};
  color: ${macchiato.mantle.hex};
`;

export const SecondaryButton = styled(BaseButton)`
  border: 1px solid ${macchiato.blue.hex};
  color: ${macchiato.blue.hex};
`;
