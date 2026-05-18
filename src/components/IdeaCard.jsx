import React from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function IdeaCard({ idea }) {
  const { _id, title, shortDescription, imageUrl, budget, time } = idea;
  return (
    <Card className="w-full items-stretch md:flex-row">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-40">
        <Image
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={imageUrl}
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 font-semibold">{title}</Card.Title>
          <Card.Description>{shortDescription}</Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              Budget: ${budget}
            </span>
            <span className="text-xs text-muted">Published: {time}</span>
          </div>
          <Link href={`idea/${_id}`}>
            <Button variant="tertiary" className="w-full sm:w-auto">
              View Idea
            </Button>
          </Link>
        </Card.Footer>
      </div>
    </Card>
  );
}
