"use client";
import TestAnswer from "./TestAnswer";
import React, { useState } from "react";
import { Space, Tag } from "antd";
const { CheckableTag } = Tag;

export default () => {
  const tagsData = [
    "پاسخ",
    "سوال",
    "اینجا",
    "بنویسید",
    "پاسخ",
    "سوال",
    "اینجا",
    "بنویسید",
  ];
  const [selectedTags, setSelectedTags] = useState(["Books"]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center items-end mb-5 mt-3">
        <div className="w-10/12 ">
          <p style={{ color: "#555555", marginBottom: 5 }}>پاسخ سوال</p>
          <TestAnswer />
          <div className="mb-2 ">
        <span
          style={{
           
          }}
        ></span>
        <Space size={[0, 8]} wrap>
          {tagsData.map((tag) => (
            <CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
              style={{ color: "#555555" }}
            >
              {tag}
            </CheckableTag>
          ))}
        </Space>
      </div>
        </div>
      </div>

    </div>
  );
};
