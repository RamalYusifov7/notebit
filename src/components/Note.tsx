import { Note as NoteModel } from "@prisma/client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface NoteProps {
  note: NoteModel;
}

function Note({ note }: NoteProps) {
  const wasUpdated = note.updatedAt > note.createdAt;
  const createUpdatedatTimestamp = (
    wasUpdated ? note.updatedAt : note.createdAt
  ).toDateString();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <CardDescription>
          {createUpdatedatTimestamp}
          {wasUpdated && "updated"}
        </CardDescription>
      </CardHeader>
      <CardContent>
         <p className="whitespace-pre-line">
           {note.content}
         </p>
      </CardContent>
    </Card>
  );
}

export default Note;
