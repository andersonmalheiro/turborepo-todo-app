import { Task } from "model/Task";
import { FormEvent, useState } from "react";
import { Button, Input } from "ui";
import { Container, Form } from "./TaskForm.styles";

interface TaskFormProps {
  onAdd(...args: any[]): void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [task, setTask] = useState<Task>({
    description: "",
    done: false,
  } as Task);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { type, name } = e.target;
    const inputValue = type === "checkbox" ? e.target.checked : e.target.value;

    setTask({ ...task, [name]: inputValue });
  };

  const createTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({
          data: task,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTask({
        description: "",
        done: false,
      });

      await onAdd();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h2>Create a task</h2>
      <Form onSubmit={createTask}>
        <Input
          inline
          label="Description"
          type="text"
          id="description"
          name="description"
          onChange={handleFormChange}
          value={task.description}
          required
        />

        <Input
          label="Done"
          inline
          type="checkbox"
          id="done"
          name="done"
          onChange={handleFormChange}
          defaultChecked={task.done}
        />

        <Button type="submit">Create task</Button>
      </Form>
    </Container>
  );
}
