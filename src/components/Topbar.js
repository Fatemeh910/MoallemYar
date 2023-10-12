import React from "react";
import { Avatar, Space } from "antd";

export default function Topbar() {
  return (
    <div className="flex w-full bg-white rounded-full mt-2 p-2  align-center justify-between">
      <div className="">
        <div className="flex">
          <img src="/assets/icon/homeOutline.svg" alt="homeIcon"  className="mr-10 ml-1"/>
          <p style={{ color: "#555555" }}>پیشخوان </p>
        </div>
      </div>
      <div className="flex">
        <p style={{ color: "#555555" }}> علی امیری ، خوش آمدید </p>
        <Avatar size={30} className="mr-4" />
      </div>
    </div>
  );
}
