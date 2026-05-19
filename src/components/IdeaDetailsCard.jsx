import { Calendar } from "@gravity-ui/icons";
import { Avatar, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { CommentBox } from "./CommentBox";
import { CommentCard } from "./CommentCard";

export default async function IdeaDetailsCard({ idea }) {
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
  } = idea;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/comment/${_id}`,
  );
  const comments = await res.json();

  return (
    <section className="max-w-[80%] mx-auto">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div>
            <div className="flex flex-col gap-4">
              <Chip color="warning" className="w-max">
                Idea
              </Chip>
              <h1 className="text-4xl font-semibold">{title}</h1>
            </div>
            <div>
              <p className="text-gray-600 my-2">{shortDescription}</p>
            </div>

            <p className="text-lg my-2 font-semibold">Author</p>
            <div className="flex items-center gap-2">
              <Avatar>
                <Avatar.Image alt={userName} src={userImage} />
                <Avatar.Fallback>{userName[0]}</Avatar.Fallback>
              </Avatar>

              <p>{userName}</p>
            </div>
          </div>

          <div>
            <p className="text-lg mb-2 mt-4 font-semibold">Date</p>
            <p className="flex items-center gap-2">
              <Calendar /> {time}
            </p>
          </div>

          <div>
            <p className="text-lg mb-2 mt-4 font-semibold">Budget</p>
            <p className="flex items-center gap-2">${budget} USD</p>
          </div>

          <div>
            <p className="text-lg mb-2 mt-4 font-semibold">Category</p>
            <p className="flex items-center gap-2">{category}</p>
          </div>
        </div>
        <div className="flex-2 space-y-6">
          <div>
            <Image
              src={imageUrl}
              alt="idea"
              height={200}
              width={400}
              className="w-full rounded-xl"
            />
          </div>

          <div>
            <h6 className="text-2xl font-semibold mt-4">About The Idea</h6>
            <article className="text-lg">{detailedDescription}</article>

            <h6 className="text-2xl font-semibold mt-4">Problem Statement</h6>
            <p className="text-lg">{statement}</p>

            <h6 className="text-2xl font-semibold mt-4">Solution</h6>
            <p className="text-lg">{solution}</p>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl mt-6 mb-1">Comments</h1>

            <div>
              <CommentBox ideaId={_id} />
            </div>

            <div>
              {comments.map((comment) => (
                <CommentCard key={comment._id} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
