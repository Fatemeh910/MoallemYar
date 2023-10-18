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
    <div className="flex flex-col w-full mx-2">
      <p>پاسخ سوال</p>
      <div className="border-solid border-2 border-red-300">
        <div className="flex items-end">
          <div className="">
            <TestAnswer />
          </div>
          <p className="text-red-300 mr-2">تک کلمه ای</p>
        </div>
        <div className="">
          <span
            style={{
              marginRight: 8,
            }}
          >
            
          </span>
          <Space size={[0, 8]} wrap>
            {tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={selectedTags.includes(tag)}
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </Space>
        </div>
      </div>
    </div>
  );
};
