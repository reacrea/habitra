import { z } from "zod";
//#region src/validations/task.ts
var updateTaskAssigneeSchema = z.object({
	taskId: z.string().trim().min(1),
	assigneeId: z.string().trim().min(1).nullable()
});
//#endregion
export { updateTaskAssigneeSchema as t };
