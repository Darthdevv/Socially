import CreateUser from "@/components/CreateUser";
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";


export default async function Home() {

  const user = await currentUser();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className=" lg:col-span-6">
        {user ? <CreateUser /> : null}
      </div>

      <div className="hidden lg-block lg:col-span-4 sticky">
          WhoToFollow
      </div>
    </div>
  );
}
