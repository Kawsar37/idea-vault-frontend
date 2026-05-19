import { CommentCard } from "@/components/CommentCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

export default async function MyInterActionsPage() {
  const session = await auth.api.getSession({
    query: {
      disableCookieCache: true,
    },
    headers: await headers(),
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/my-comment/${session.user.id}`,
  );
  const comments = await res.json();

  return (
    <div className="max-w-[90%] lg:max-w-[70%] mx-auto">
      <h1 className="text-gray-700 mb-7 text-3xl font-semibold">
        My Interactions
      </h1>
      <div className="space-y-3">
        {comments.map((comment) => (
          <CommentCard key={comment._id} comment={comment} icon={true} />
        ))}
      </div>
    </div>
  );
}
