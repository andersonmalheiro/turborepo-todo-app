import styled from "styled-components";
import { variants } from "@catppuccin/palette";

const { macchiato } = variants;

interface TaskProps {
  done: boolean;
}

export const Container = styled.li`
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 1em;
  color: ${macchiato.text.hex};
`;

export const TaskDescription = styled.span<TaskProps>`
  color: ${macchiato.peach.hex};
  font-size: 1.2em;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
`;
