export const metadata={
  title:"Sign in"
}


import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="flex justify-center items-center h-screen">
  <SignIn />
</div>
}