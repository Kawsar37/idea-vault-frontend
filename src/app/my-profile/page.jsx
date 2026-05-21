import { ProfileEditModal } from "@/components/ProfileEditModal";
import { auth } from "@/lib/auth";
import { Avatar } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "My Profile",
  description: "IdeaVault is a idea publishing blog website",
};

export default async function MyProfilePage() {
  const session = await auth.api.getSession({
    query: {
      disableCookieCache: true,
    },
    headers: await headers(),
  });

  return (
    <div className="relative">
      <div className="min-h-40 bg-amber-300 dark:bg-amber-300/50 -mt-7 lg:-mt-15"></div>
      <Avatar className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%] size-40 rounded-full ring-1 ring-white">
        <Avatar.Image alt={session.user.name} src={session.user.image} />
        <Avatar.Fallback>{session.user.name[0]}</Avatar.Fallback>
      </Avatar>

      <div className="text-lg text-gray-700 dark:text-gray-100 flex flex-col gap-4 max-w-200 px-4 mx-auto text-center mt-30">
        <h1>
          <strong>Name:</strong> {session.user.name}
        </h1>
        <p>
          <strong>Email:</strong> {session.user.email}
        </p>
        <hr />
        <p>
          <strong>Image URL:</strong> {session.user.image}
        </p>
      </div>
      <div className="flex justify-center">
        <ProfileEditModal />
      </div>
    </div>
  );
}
