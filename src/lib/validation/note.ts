import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().optional(),
});

export type NoteSchemaType = z.infer<typeof noteSchema>;

export const noteUpdateSchema = noteSchema.extend({
  id: z.string().min(1),
});
export const noteDeleteSchema = z.object({
  id: z.string().min(1),
});

