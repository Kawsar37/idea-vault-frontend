import { Spinner } from "@heroui/react";
import React from "react";

export default function loading() {
  return (
    <div className="flex flex-col items-center justify center gap-2 w-full">
      <Spinner color="warning" />
    </div>
  );
}
