"use client";
import TestAnswer from "./TestAnswer";
import React, { useState } from "react";
import { Space, Tag } from "antd";
const { CheckableTag } = Tag;

export default () => {
  const tagsData = ["پاسخ", "سوال", "اینجا", "بنویسید"];
  const [selectedTags, setSelectedTags] = useState(["Books"]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  return (
    <div className=" ">
     
    </div>
  );
};
