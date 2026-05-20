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

export function EditIdeaModal({ idea }) {
  const {
    _id,
    title,
    shortDescription,
    detailedDescription,
    category,
    imageUrl,
    budget,
    statement,
    solution,
    time,
    userName,
    userImage,
    audience,
  } = idea;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedIdea = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/idea/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedIdea),
      },
    );

    const data = await res.json();
    if (data) toast.success("Idea Updated!");
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
                Edit Your Idea Content
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
                    name="title"
                    type="text"
                    defaultValue={title}
                  >
                    <Label>Idea Title</Label>
                    <Input
                      className={"shadow-sm w-full"}
                      placeholder="Enter Your Idea Title"
                    />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    name="shortDescription"
                    type="text"
                    defaultValue={shortDescription}
                  >
                    <Label>Short Description</Label>
                    <TextArea placeholder="Enter Short Description of Your Idea" />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    name="detailedDescription"
                    type="text"
                    defaultValue={detailedDescription}
                  >
                    <Label>Detailed Description</Label>
                    <TextArea
                      rows={3}
                      placeholder="Enter Detailed Description of Your Idea"
                    />
                    <FieldError />
                  </TextField>

                  <div className="flex justify-between gap-3">
                    <Select
                      name="category"
                      isRequired
                      // placeholder="Select one"
                      defaultValue={category}
                      className={"flex-1"}
                    >
                      <Label>Category</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Tech" textValue="Tech">
                            Tech
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Health" textValue="Health">
                            Health
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="AI" textValue="AI">
                            AI
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Education" textValue="Education">
                            Education
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item
                            id="Environment"
                            textValue="Environment"
                          >
                            Environment
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item
                            id="Agriculture"
                            textValue="Agriculture"
                          >
                            Agriculture
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Design" textValue="Design">
                            Design
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Design" textValue="Design">
                            Community
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Others" textValue="Others">
                            Others
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <TextField
                      isRequired
                      name="imageUrl"
                      type="text"
                      className="flex-1"
                      defaultValue={imageUrl}
                    >
                      <Label>Image URL</Label>
                      <Input
                        placeholder="Enter Image URL"
                        className={"shadow-sm"}
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  <div className="flex justify-between gap-3">
                    <TextField
                      isRequired
                      name="budget"
                      type="number"
                      className="flex-1"
                      defaultValue={budget}
                    >
                      <Label htmlFor="input-type-number">Estimate Budget</Label>
                      <Input
                        id="input-type-number"
                        min={0}
                        placeholder="Enter Your Estimate Budget"
                        className={"shadow-sm"}
                      />
                      <FieldError />
                    </TextField>

                    <TextField
                      isRequired
                      name="audience"
                      type="audience"
                      className="flex-1"
                      defaultValue={audience}
                    >
                      <Label>Target Audience</Label>
                      <Input
                        placeholder="Enter Target Audience"
                        className={"shadow-sm"}
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  <TextField
                    isRequired
                    name="statement"
                    type="text"
                    defaultValue={statement}
                  >
                    <Label>Problem Statement</Label>
                    <TextArea rows={3} placeholder="Enter Problem Statement" />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    name="solution"
                    type="text"
                    defaultValue={solution}
                  >
                    <Label>Proposed Solution</Label>
                    <TextArea rows={3} placeholder="Enter Proposed Solution" />
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
