import React, { useState } from "react";
import { Container, TaskDescription } from "./Task.styles";

interface TaskProps {
  description: string;
  done: boolean;
}

export default function Task({ description, done }: TaskProps) {
  const [isDone, setIsDone] = useState(done);

  return (
    <Container>
      <TaskDescription done={isDone}>{description}</TaskDescription>
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => setIsDone(e.target.checked)}
      />
    </Container>
  );
}
