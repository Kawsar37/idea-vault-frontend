import React from "react";
import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import IdeaDeleteButton from "./IdeaDeleteButton";
import { EditIdeaModal } from "./EditIdeaModal";

export default function IdeaCard({ idea, icon = false }) {
  const {
    _id,
    title,
    shortDescription,
    imageUrl,
    userName,
    userImage,
    budget,
  } = idea;
  return (
    <Card className="w-full items-stretch md:flex-row rounded-xl">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-40">
        <Image
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={
            imageUrl ||
            "https://martech.org/wp-content/uploads/2015/11/idea_1920.jpg"
          }
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 ">
        <Card.Header className="gap-1 relative">
          <Card.Title className="pr-8 font-semibold">{title}</Card.Title>
          <Card.Description className="text-gray-700 dark:text-shadow-white">
            {shortDescription}
          </Card.Description>
          <p className="text-sm">Budget: ${budget}</p>

          {icon && (
            <div className="flex gap-3 absolute md:top-2 top-31 right-2">
              <EditIdeaModal idea={idea} /> <IdeaDeleteButton id={_id} />
            </div>
          )}
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground flex items-center gap-2">
              <Avatar size="sm">
                <Avatar.Image alt={userName} src={userImage} />
                <Avatar.Fallback>{userName[0]}</Avatar.Fallback>
              </Avatar>

              <p>{userName}</p>
            </span>
            {/* <span className="text-xs text-muted">Published: {time}</span> */}
          </div>
          <Link href={`ideas/${_id}`}>
            <Button variant="tertiary" className="w-full sm:w-auto">
              View Idea
            </Button>
          </Link>
        </Card.Footer>
      </div>
    </Card>
  );
}
