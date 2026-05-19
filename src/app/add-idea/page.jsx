"use client";

import React, { useState } from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
  Spinner,
} from "@heroui/react";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function AddIdeaPage() {
  const [isPending, setIsPending] = useState(false);
  const { data: session, isPending: sessionPending } = useSession();

  const onSubmit = async (e) => {
    setIsPending(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const idea = {
      ...Object.fromEntries(formData.entries()),
      userId: session.user.id,
      userName: session.user.name,
      userImage: session.user.image,
      time: new Date().toLocaleDateString(),
    };
    // console.log(formData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/idea`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(idea),
    });
    setIsPending(false);

    const data = await res.json();
    if (data) {
      toast.success("Idea Added Successfully!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-7">
      <h1 className="text-4xl font-semibold text-gray-500">Add New Idea</h1>
      <Form
        className="flex w-[90%] lg:w-[60%] flex-col gap-4 ring ring-slate-400/20 p-4 rounded-lg"
        onSubmit={onSubmit}
      >
        <TextField isRequired name="title" type="text">
          <Label>Idea Title</Label>
          <Input placeholder="Enter Your Idea Title" />
          <FieldError />
        </TextField>

        <TextField isRequired name="shortDescription" type="text">
          <Label>Short Description</Label>
          <TextArea placeholder="Enter Short Description of Your Idea" />
          <FieldError />
        </TextField>

        <TextField isRequired name="detailedDescription" type="text">
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
            placeholder="Select one"
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
                <ListBox.Item id="Environment" textValue="Environment">
                  Environment
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Agriculture" textValue="Agriculture">
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

          <TextField isRequired name="imageUrl" type="text" className="flex-1">
            <Label>Image URL</Label>
            <Input placeholder="Enter Image URL" />
            <FieldError />
          </TextField>
        </div>

        <div className="flex justify-between gap-3">
          <TextField isRequired name="budget" type="number" className="flex-1">
            <Label htmlFor="input-type-number">Estimate Budget</Label>
            <Input
              id="input-type-number"
              min={0}
              placeholder="Enter Your Estimate Budget"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="audience"
            type="audience"
            className="flex-1"
          >
            <Label>Target Audience</Label>
            <Input placeholder="Enter Target Audience" />
            <FieldError />
          </TextField>
        </div>

        <TextField isRequired name="statement" type="text">
          <Label>Problem Statement</Label>
          <TextArea rows={3} placeholder="Enter Problem Statement" />
          <FieldError />
        </TextField>

        <TextField isRequired name="solution" type="text">
          <Label>Proposed Solution</Label>
          <TextArea rows={3} placeholder="Enter Proposed Solution" />
          <FieldError />
        </TextField>

        <div className="flex gap-2 justify-end">
          <Button type="reset" variant="secondary">
            Reset
          </Button>
          {isPending ? (
            <Button isPending>
              {({ isPending }) => (
                <>
                  {isPending ? <Spinner color="current" size="sm" /> : null}
                  Submitting Idea...
                </>
              )}
            </Button>
          ) : (
            <Button type="submit">
              <Check />
              Submit Idea
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}
