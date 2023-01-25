import { Task } from "model/Task";
import randomString from "utils/string/randomString";

interface DB {
  tasks: Array<Task>;
}

const db: DB = {
  tasks: [
    {
      id: randomString(),
      description: "Remove the trash",
      done: false,
    },
    {
      id: randomString(),
      description: "Clean the bedroom",
      done: false,
    },
  ],
};

export default db;
