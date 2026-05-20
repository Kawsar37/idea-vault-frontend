"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { PencilToSquare } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { Check } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function ProfileEditModal() {
  const { data: session } = useSession();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedProfile = Object.fromEntries(formData.entries());

    const { data } = await authClient.updateUser({
      name: updatedProfile.name,
      image: updatedProfile.image,
    });

    if (data) toast.success("Profile Updated!");
    else toast.error("Profile Update Failed");
  };
  return (
    <Modal>
      <Button
        className={"mt-6 bg-amber-300"}
        // md:top-2 top-20
      >
        <PencilToSquare />
        Edit Profile
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
                Edit Your Profile
              </p>
            </Modal.Header>
            <Modal.Body className="p-4">
              <Surface variant="default">
                <Form
                  className="flex w-full flex-col gap-4"
                  onSubmit={onSubmit}
                >
                  <TextField
                    defaultValue={session?.user?.name}
                    isRequired
                    name="name"
                    type="text"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter Full Name" />
                    <FieldError />
                  </TextField>

                  <TextField
                    defaultValue={session?.user?.image}
                    isRequired
                    name="image"
                    type="text"
                  >
                    <Label>Image Link</Label>
                    <Input placeholder="https://example.com/image" />
                    <FieldError />
                  </TextField>

                  <div className="flex gap-2 flex-row-reverse">
                    <Button type="submit" className={"bg-(--p-color) w-full"}>
                      <Check />
                      Save
                    </Button>
                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
