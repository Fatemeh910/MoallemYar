"use client";
import React, { useState } from "react";
import { Avatar, Popover } from "antd";
import { ConfigProvider } from "antd";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <div className="flex w-full  bg-white rounded-full mt-2  p-2  justify-between items-center">
      <div className="">
        <div className="flex ">
          <img
            src="/assets/icon/homeOutline.svg"
            alt="homeIcon"
            className="mr-10 ml-2"
          />
          <p style={{ color: "#555555" }}>پیشخوان </p>
        </div>
      </div>
      <div className="flex items-center">
        <p style={{ color: "#555555" }}> علی امیری،خوش آمدید </p>
        <ConfigProvider
          theme={{
            token: {
              colorLinkHover: "#555555",
              
            },
          }}
        >
          <Popover
          
            content={
              <a
                onClick={hide}
                className="flex items-center pb-3 pr-2
            pl-2 hover:bg-slate-100 hover:w-full hover:h-full  "
              >
                <img width={24} src="/assets/icon/powerButton.svg" alt="powerButton" />
                <p style={{ color: "#EE6E62", fontSize: 14}}>خروج</p>
              </a>
            }
            title={
              <div className="flex hover:w-full hover:p-0 ">
                <a
                  href="#"
                  className="flex p-2 hover:bg-slate-100 hover:w-full hover:h-full
              "
                >
                  <img width={20} src="/assets/icon/userOutline.svg" alt="userOutline" />
                  <p className="mr-2 font-normal">پروفایل کاربری</p>
                </a>
              </div>
            }
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
            overlayStyle = {{left: '7px'}}
          >
            <Avatar
              size={40}
              className="mr-6 cursor-pointer hover:border-1 hover:border-gray-200 border-1 border-gray-50"
              src={<img src="/assets/img/userImage.jpg" alt="avatar" />}
              
            />
          </Popover>
        </ConfigProvider>
      </div>
    </div>
  );
}
