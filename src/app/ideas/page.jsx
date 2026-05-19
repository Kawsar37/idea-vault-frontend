import IdeaCard from "@/components/IdeaCard";
import React from "react";

export default async function IdeasPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas`);
  const ideas = await res.json();

  return (
    <div className="max-w-[90%] mx-auto">
      <h1 className="text-4xl font-semibold text-gray-500 text-center">
        All Ideas
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {ideas.map((idea) => (
          <IdeaCard idea={idea} key={idea._id} />
        ))}
      </div>
    </div>
  );
}
