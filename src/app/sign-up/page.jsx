"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Card } from "@heroui/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);
    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Registration Successfull.");
      redirect("/");
    }
    if (error) {
      console.log(error);
      toast.error("Registration Failed.");
    }
  };
  return (
    <div className="pt-15 lg:pt-10">
      <Card className="md:max-w-96 max-w-[90%] mx-auto">
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter Full Name" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label>Image Link</Label>
            <Input placeholder="https://example.com/image" />
            <FieldError />
          </TextField>

          <TextField
            className="w-full"
            name="password"
            isRequired
            minLength={6}
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full"
                type={isVisible ? "text" : "password"}
                placeholder="Enter Password"
              />

              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2 flex-row-reverse">
            <Button type="submit" className={"bg-(--p-color)"}>
              <Check />
              Submit
            </Button>
            <Button
              type="reset"
              variant="secondary"
              className={"text-(--p-color)"}
            >
              Reset
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
