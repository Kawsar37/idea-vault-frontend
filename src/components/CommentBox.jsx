"use client";

import { useSession } from "@/lib/auth-client";
import { ArrowUp } from "@gravity-ui/icons";
import {
  Button,
  InputGroup,
  Kbd,
  Spinner,
  TextField,
  Tooltip,
} from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export function CommentBox({ ideaId }) {
  const { data: session, isPending } = useSession();

  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!value.trim()) return;

    setIsSubmitting(true);
    const commentData = {
      ideaId,
      userId: session.user.id,
      userName: session.user.name,
      userImage: session.user.image,
      comment: value,
      time: new Date(),
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    setIsSubmitting(false);
    const data = await res.json();
    if (data) {
      toast.success("Commented Successfully!");
    }
  };

  return (
    <TextField
      fullWidth
      aria-label="Prompt input"
      className="flex w-full flex-col"
      name="prompt"
    >
      <InputGroup fullWidth className="flex flex-col gap-2 rounded-3xl py-2">
        <InputGroup.TextArea
          className="w-full resize-none px-3.5 py-3"
          placeholder="Write Your Comment..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <InputGroup.Suffix className="flex w-full items-center gap-1.5 px-3 py-0">
          <div className="ml-auto flex items-center gap-1.5">
            <Tooltip delay={0}>
              <Button
                isIconOnly
                aria-label="Comment"
                isDisabled={!value.trim()}
                isPending={isSubmitting}
                onPress={handleSubmit}
              >
                {({ isPending }) =>
                  isPending ? (
                    <Spinner color="current" size="sm" />
                  ) : (
                    <ArrowUp />
                  )
                }
              </Button>
              <Tooltip.Content className="flex items-center gap-1">
                <p className="text-xs">Comment</p>
                <Kbd className="h-4 rounded-sm px-1">
                  <Kbd.Abbr keyValue="enter" />
                </Kbd>
              </Tooltip.Content>
            </Tooltip>
          </div>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  );
}
