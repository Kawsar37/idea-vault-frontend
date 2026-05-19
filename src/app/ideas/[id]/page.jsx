import IdeaDetailsCard from "@/components/IdeaDetailsCard";
import React from "react";

export default async function IdeaDetailsPage({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/idea/${id}`);
  const idea = await res.json();
  return (
    <div>
      {idea.map((item) => (
        <IdeaDetailsCard key={item._id} idea={item} />
      ))}
    </div>
  );
}
