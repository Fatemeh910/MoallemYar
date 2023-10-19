"use client";
import React, { useState } from "react";
import { Input, Space, Tag } from "antd";
const { CheckableTag } = Tag;

export default () => {
  const { TextArea } = Input;
  const [tagsData, setTagsData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [shortAnswerSentence, setShortAnswerSentence] = useState("");

  const convertToTags = (e) => {
    setShortAnswerSentence(e.target.value);
    let replacedToComma = shortAnswerSentence.replaceAll(" ", "،");
    let seperated = replacedToComma.split("،").filter((item) => {
      return item != "";
    });
    setTagsData(seperated);
  };

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className="">
      <TextArea
        value={shortAnswerSentence}
        onChange={convertToTags}
        showCount
        maxLength={100}
        rows={1}
        placeholder=" پاسخ سوال خود را اینجا واردکنید. "
      />
      <div className="mt-2 ">
        <Space size={[0, 8]} wrap>
          {tagsData.map((tag, index) => (
            <CheckableTag
              key={"tag_" + tag + "_" + index}
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
