import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
function Navbar() {
  return (
    <div className="p-4 shadow">
      <div className="flex flex-wrap items-center justify-between gap-1">
        <Link href="/notes" className="flex items-center">
          <Image src={logo} alt="FlowBrain logo" width={60} height={60} />
          <span className="font-bold">GPT</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button size="sm">
            <Plus size={20} className="mr-2" />
            Add Note
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
