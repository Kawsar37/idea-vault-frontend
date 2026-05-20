"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import React from "react";

export default function LogOutOutBtn() {
  return (
    <Button
      onClick={async () => {
        await authClient.signOut();
      }}
      className={"z-99999 bg-red-400 w-full"}
    >
      Log Out
    </Button>
  );
}
