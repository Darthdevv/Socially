import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreateUser from "@/components/CreatePost";
import ModeToggle from "@/components/ModeToggle";
import PostCard from "@/components/PostCard";
import SuggestedUsers from "@/components/SuggestedUsers";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";


export default async function Home() {

  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDbUserId();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className=" lg:col-span-6">
        {user ? <CreateUser /> : null}

        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <SuggestedUsers />
      </div>
    </div>
  );
}
