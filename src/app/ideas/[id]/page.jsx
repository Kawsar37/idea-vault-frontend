import IdeaDetailsCard from "@/components/IdeaDetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "IdeaVault - Ideas",
  description: "IdeaVault is a idea publishing blog website",
};

export default async function IdeaDetailsPage({ params }) {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/idea/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const idea = await res.json();
  return (
    <div>
      {idea.map((item) => (
        <IdeaDetailsCard key={item._id} idea={item} />
      ))}
    </div>
  );
}
