import React from "react";
import { Container, TaskDescription } from "./Task.styles";

interface TaskProps {
  description: string;
  done: boolean;
}

export default function Task({ description, done }: TaskProps) {
  return (
    <Container>
      <TaskDescription done={done}>{description}</TaskDescription>
      <input type="checkbox" defaultChecked={done} />
    </Container>
  );
}
