"use client";
import React, { useState } from "react";
import { Input, Space, Tag } from "antd";
const { CheckableTag } = Tag;

export default () => {
  const { TextArea } = Input;
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

  const [shortAnswerSentence, setShortAnswerSentence] = useState("");
  return (
    <div className="">
      <TextArea
        value={shortAnswerSentence}
        onChange={(e) => {
          setShortAnswerSentence(e.target.value);
        }}
        showCount
        maxLength={100}
        rows={1}
        placeholder=" پاسخ سوال خود را اینجا واردکنید. "
      />
      <div className="mb-2 ">
        <span style={{}}></span>
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
  );
};
