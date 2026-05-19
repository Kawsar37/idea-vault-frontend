import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import CommentDeleteButton from "./CommentDeleteButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function CommentCard({ comment: data }) {
  const session = await auth.api.getSession({
    query: {
      disableCookieCache: true,
    },
    headers: await headers(),
  });
  const { _id, userId, userName, userImage, comment, time } = data;

  return (
    <Card className="w-full flex flex-row mb-3">
      <div className="relative">
        <Avatar>
          <Avatar.Image alt={userName} src={userImage} />
          <Avatar.Fallback>{userName[0]}</Avatar.Fallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 font-semibold text-base">
            {userName}
          </Card.Title>
          <Card.Description className="text-base">{comment}</Card.Description>
          {session.user.id === userId && <CommentDeleteButton id={_id} />}
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              Commented At
            </span>
            <span className="text-xs text-muted">
              {new Date(time).toLocaleString("en-BD", {
                timeZone: "Asia/Dhaka",
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </span>
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
}
