import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export default  async function Home() {
  return (
    <div>
      Content of home page
    </div>
  );
}
