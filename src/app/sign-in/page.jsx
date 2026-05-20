"use client";

import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });
    if (data) {
      redirect("/");
    }
    if (error) {
      toast.error("LogIn Failed.");
    }
  };
  return (
    <div className="pt-15 lg:pt-10">
      <Card className="md:max-w-96 max-w-[90%] mx-auto">
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
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

          <TextField className="w-full" name="password" isRequired>
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
            <FieldError />
          </TextField>

          <div className="w-full">
            <Button type="submit" className={"w-full bg-(--p-color)"}>
              <Check />
              Submit
            </Button>

            <p className="text-gray-600 text-sm text-center mt-3">
              Don&#39;t have an account?{" "}
              <Link href={"/sign-up"} className="text-blue-600">
                Register now
              </Link>
            </p>

            <p className="text-gray-600 my-3 text-center text-sm">OR</p>

            <Button className="w-full" variant="tertiary">
              <Icon icon="devicon:google" />
              Sign in with Google
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
