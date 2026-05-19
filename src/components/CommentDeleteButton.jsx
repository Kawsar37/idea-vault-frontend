"use client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import toast from "react-hot-toast";

export default function CommentDeleteButton({ id }) {
  const handleDelete = async () => {
    console.log(id);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/comment/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      },
    );

    const data = await res.json();
    if (data) toast.success("Comment Deleted!");
  };

  return (
    <AlertDialog>
      <Button
        variant="danger"
        className={"rounded-full h-10 w-10 absolute md:top-2 top-20 right-2"}
      >
        <TrashBin />
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Comment permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This comment will permanently delete{" "}
                <strong>This action cannot be undone.</strong>
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Comment
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
