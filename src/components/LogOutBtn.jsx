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
      className={" w-full"}
    >
      Log Out
    </Button>
  );
}
