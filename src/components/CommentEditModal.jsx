"use client";

import { PencilToSquare } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import toast from "react-hot-toast";

export function CommentEditModal({ comment }) {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedIdea = {
      ...Object.fromEntries(formData.entries()),
      time: new Date(),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/comment/${comment._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedIdea),
      },
    );

    const data = await res.json();
    if (data) toast.success("Comment Updated!");
  };
  return (
    <Modal>
      <Button
        variant="secondary"
        className={"h-10 w-10 rounded-full"}
        // md:top-2 top-20
      >
        <PencilToSquare />
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <PencilToSquare className="size-6" />
              </Modal.Icon>
              <Modal.Heading>Edit</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Edit Your Comment
              </p>
            </Modal.Header>
            <Modal.Body className="p-4">
              <Surface variant="default">
                <Form
                  className="flex w-full flex-col gap-4"
                  onSubmit={onSubmit}
                >
                  <TextField
                    isRequired
                    name="comment"
                    type="text"
                    defaultValue={comment.comment}
                  >
                    <Label>Comment</Label>
                    <Input
                      className={"shadow-sm w-full"}
                      placeholder="Edit Your Comment"
                    />
                    <FieldError />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Save
                    </Button>
                  </Modal.Footer>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
