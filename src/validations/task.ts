import { z } from "zod";

export const updateTaskAssigneeSchema = z.object({
  taskId: z.string().trim().min(1),
  assigneeId: z.string().trim().min(1).nullable(),
});
