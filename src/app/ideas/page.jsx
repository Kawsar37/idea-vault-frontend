"use client";

import IdeaCard from "@/components/IdeaCard";
import { fetchIdeas } from "@/lib/machine";
import { Button, Label, SearchField, Select, ListBox } from "@heroui/react";
import React, { useEffect, useState } from "react";

export default function IdeasPage() {
  const [ideas, setIdeas] = useState([]);
  const [state, setState] = useState(null);
  useEffect(() => {
    async function loadIdeas() {
      const data = await fetchIdeas();
      setIdeas(data);
    }
    loadIdeas();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { search } = Object.fromEntries(formData);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/idea-search/${search}`,
    );
    const data = await res.json();
    setIdeas(data);
  };

  const handleOnChange = async (keys) => {
    setState(keys);
    const selected = Array.from(keys).join("");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/idea-category/${selected}`,
    );
    const data = await res.json();
    console.log(data);
    setIdeas(data);
  };

  return (
    <div className="max-w-[90%] mx-auto">
      <h1 className="text-4xl font-semibold text-gray-500 text-center mb-4">
        All Ideas
      </h1>

      <div className="flex gap-4 flex-wrap">
        <form onSubmit={handleOnSubmit} className="flex-2 flex gap-2 items-end">
          <SearchField name="search" className="flex-2">
            <Label>Search</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input placeholder="Search..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <Button type="submit" className={"bg-(--p-color) text-black"}>
            Search
          </Button>
        </form>

        <form className="flex-1">
          <Select
            name="category"
            value={state}
            onChange={handleOnChange}
            isRequired
            placeholder="Select Category"
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
        </form>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {ideas.map((idea) => (
          <IdeaCard idea={idea} key={idea._id} />
        ))}
      </div>
    </div>
  );
}
