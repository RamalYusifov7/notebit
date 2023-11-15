"use client";

import { Note as NoteModel } from "@prisma/client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import AddEditNoteDialog from "./AddEditNoteDialog";

interface NoteProps {
  note: NoteModel;
}

function Note({ note }: NoteProps) {
  const [editDialog, setEditDialog] = useState(false);
  const wasUpdated = note.updatedAt > note.createdAt;
  const createUpdatedatTimestamp = (
    wasUpdated ? note.updatedAt : note.createdAt
  ).toDateString();

  return (
    <>
      <Card  className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setEditDialog(true)}>
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>
            {createUpdatedatTimestamp}
            {wasUpdated && "updated"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{note.content}</p>
        </CardContent>
      </Card>
      <AddEditNoteDialog open={editDialog} setOpen={setEditDialog} editNote={note} />
    </>
  );
}

export default Note;
