import { z } from "zod";

export const TaskSchema = z.object({
  description: z.string(),
  done: z.boolean(),
  id: z.string().optional(),
});

export type Task = z.infer<typeof TaskSchema>;
