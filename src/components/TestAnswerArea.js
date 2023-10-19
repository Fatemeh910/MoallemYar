"use client";
import TestAnswer from "./TestAnswer";
import React, { useState } from "react";

export default () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center items-end mb-5 mt-3">
        <div className="w-10/12 ">
          <p style={{ color: "#555555", marginBottom: 5 }}>پاسخ سوال</p>
          <TestAnswer />
        </div>
      </div>
    </div>
  );
};
