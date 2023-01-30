import Task from "components/Task";
import TaskForm from "components/TaskForm";
import { Task as TaskModel } from "model/Task";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { Column, Container, Grid, TaskList, Title } from "styles/Home.styles";

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

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks");
      const { data } = await response.json();
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Title>Tasks</Title>
      <Grid>
        <Column>
          <TaskForm onAdd={fetchTasks} />
        </Column>

        <Column>
          <TaskList>
            {data.map((task) => (
              <Task key={task.id} {...task} />
            ))}
          </TaskList>
        </Column>
      </Grid>
    </Container>
  );
}
