"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images.png";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import AddNoteDialog from "@/components/AddNoteDialog";
function Navbar() {
  const { isLoaded } = useUser();
  const [showNoteDialog, setshowNoteDialog] = useState(false);
  return (
    <>
      <div className="p-4 shadow">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <Link href="/notes" className="flex items-center">
            <Image src={logo} alt="FlowBrain logo" width={60} height={60} />
            <span className="font-bold">GPT</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={() => setshowNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            {isLoaded ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Skeleton className="h-[36px] w-[36px] rounded-full bg-slate-300" />
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
