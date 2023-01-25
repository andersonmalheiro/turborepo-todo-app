import Task from "components/Task";
import { Task as TaskModel } from "model/Task";
import { GetServerSideProps } from "next";
import { FormEvent, useState } from "react";
import { Container, TaskList, Title } from "styles/Home.styles";
import { Button } from "ui";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch("http://localhost:3000/api/tasks");
  const { data } = await response.json();

  return {
    props: {
      tasks: data,
    },
  };
};

interface HomeProps {
  tasks: Array<TaskModel>;
}

export default function Home({ tasks }: HomeProps) {
  const [data, setData] = useState<Array<TaskModel>>(tasks);
  const [task, setTask] = useState<TaskModel>({
    description: "",
    done: false,
  } as TaskModel);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { type, name } = e.target;
    const inputValue = type === "checkbox" ? e.target.checked : e.target.value;

    setTask({ ...task, [name]: inputValue });
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks");
      const { data } = await response.json();
      setData(data);
    } catch (err) {
      console.error(err);
    }
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
      await fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Title>Tasks</Title>
      <Button onClick={fetchTasks}>sync</Button>

      <form onSubmit={createTask}>
        <label htmlFor="description">
          <strong>Description</strong>
        </label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleFormChange}
          value={task.description}
          required
        />

        <label htmlFor="done">
          <strong>Done</strong>
        </label>
        <input
          type="checkbox"
          id="done"
          name="done"
          onChange={handleFormChange}
          defaultChecked={task.done}
        />

        <Button type="submit">Create task</Button>
      </form>

      <TaskList>
        {data.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </TaskList>
    </Container>
  );
}
