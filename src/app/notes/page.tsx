import Note from "@/components/Note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import React from "react";

async function page() {
  const { userId } = auth();
  if (!userId) throw new Error("unauthanticated");
  const allNotes = await prisma.note.findMany({ where: { userId } });
  console.log(allNotes);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
        {allNotes.map((note) => {
          return <Note note={note} key={note.id} />;
        })}
      </div>
      {allNotes.length === 0 && <div className="text-center text-lg font-bold mt-5">You don't have any notes </div>}
    </>
  );
}

export default page;
