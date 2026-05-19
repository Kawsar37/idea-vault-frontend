import IdeaCard from "@/components/IdeaCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

export default async function MyIdeasPage() {
  const session = await auth.api.getSession({
    query: {
      disableCookieCache: true,
    },
    headers: await headers(), // headers containing the user's session token
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas/${session.user.id}`,
  );
  const ideas = await res.json();

  return (
    <div className="max-w-[90%] lg:max-w-[70%] mx-auto">
      <h1 className="text-gray-700 mb-7 text-3xl font-semibold">My Ideas</h1>
      <div className="space-y-3">
        {ideas.map((idea) => (
          <IdeaCard key={idea._id} idea={idea} icon={true} />
        ))}
      </div>
    </div>
  );
}
