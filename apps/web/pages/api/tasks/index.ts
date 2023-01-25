import { NextApiResponse } from "next";

import db from "db";
import { Task, TaskSchema } from "model/Task";
import { CustomRequest } from "utils/model/Request";
import randomString from "utils/string/randomString";

type CreateTask = Omit<Task, "id">;

function createTask(data: CreateTask, res: NextApiResponse) {
  const task = TaskSchema.safeParse(data);

  if (!task.success) {
    return res.status(500).send({
      message: task.error.message,
      stack: task.error.stack,
    });
  }

  if (task.success) {
    const payload: Task = {
      ...task.data,
      done: false,
      id: randomString(),
    };

    db.tasks.push(payload);

    return res.status(201).json(payload);
  }
}

function getTasks(res: NextApiResponse) {
  return res.status(200).json({
    data: db.tasks,
  });
}

export default function handler(req: CustomRequest<any>, res: NextApiResponse) {
  const { data } = req.body;
  const { method } = req;

  switch (method) {
    case "GET":
      getTasks(res);
      break;

    case "POST":
      createTask(data as CreateTask, res);
      break;

    default:
      break;
  }
}
