import { Button, Card } from "@heroui/react";
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
    <Card className="w-full items-stretch md:flex-row">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <Image
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">Become an ACME Creator!</Card.Title>
          <Card.Description>
            Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam
            dolor sed amet faucibus etiam.
          </Card.Description>
          {session.user.id === userId && <CommentDeleteButton id={_id} />}
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              Only 10 spots
            </span>
            <span className="text-xs text-muted">Submission ends Oct 10.</span>
          </div>
          <Button className="w-full sm:w-auto">Apply Now</Button>
        </Card.Footer>
      </div>
    </Card>
  );
}
