import { Note } from "@prisma/client";

export interface AddEditNoteDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    editNote?:Note
}
