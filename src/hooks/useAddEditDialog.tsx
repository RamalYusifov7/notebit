import { NoteSchemaType, noteSchema } from "@/lib/validation/note";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AddEditNoteDialogProps } from "../../types";

export const useAddEditDialog = ({
  open,
  setOpen,
  editNote,
}: AddEditNoteDialogProps) => {
  const router = useRouter();
  const form = useForm<NoteSchemaType>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: editNote?.title || "",
      content: editNote?.content || "",
    },
  });
  const onSubmit = async (input: NoteSchemaType) => {

    try {
      if (editNote) {
        const resp = await fetch("api/notes", {
          method: "PUT",
          body: JSON.stringify({
            id: editNote.id,
            ...input,
          }),
        });
        if (!resp.ok) {
          throw new Error(resp.status + "error");
        }
      } else {
        const resp = await fetch("api/notes", {
          method: "POST",
          body: JSON.stringify(input),
        });
        if (!resp.ok) {
          throw new Error(resp.status + "error");
        }
        form.reset();
      }
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
      alert("smt went wrong");
    }
  };

  const deleteNote = async () => {
    if (!editNote) return;
    try {
      const resp = await fetch("api/notes", {
        method: "DELETE",
        body: JSON.stringify({
          id: editNote.id,
        }),
      });
      if (!resp.ok) {
        throw new Error(resp.status + "error");
      }
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log();
    }
  };

  return {
    form,
    onSubmit,
    deleteNote,
  };
};
