"use client";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import AddNoteDialog from "@/components/AddEditNoteDialog";
import { DarkMode } from "@/components/DarkMode";
function Navbar() {
  const { isLoaded } = useUser();
  const [showNoteDialog, setshowNoteDialog] = useState(false);
  return (
    <>
      <div className="p-4 shadow">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <Link href="/notes" className="flex items-center">
            <span className="font-bold">NOTEBIT</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={() => setshowNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            <DarkMode/>
            {isLoaded ? (
              <div className="h-[36px] min-w-[36px]">
            <UserButton  afterSignOutUrl="/" />
            </div>
              
            ) : (
              <div className="h-[36px] min-w-[36px]">
                <Skeleton className="w-full h-full rounded-full bg-slate-300" />
              </div>
            )}
          </div>
        </div>
      </div>
      {showNoteDialog && (
        <AddNoteDialog open={showNoteDialog} setOpen={setshowNoteDialog} />
      )}
    </>
  );
}

export default Navbar;
