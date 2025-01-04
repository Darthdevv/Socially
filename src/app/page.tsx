import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal" >
          <button className="bg-red-500 text-white">login</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
