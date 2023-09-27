"use client";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "antd";
import style from "@/components/exam.module.css";
import { useState } from "react";

//popover menu
const content = (
  <div className="flex flex-col text-right">
    <a
      href="#"
      className="text-textcolor text-textcolor hover:text-linkhovercolor"
    >
      لینک شماره 1
    </a>
    <a
      href="#"
      className="text-textcolor text-textcolor hover:text-linkhovercolor"
    >
      لینک شماره 2
    </a>
  </div>
);

const Exambox = (Props) => {
  const [like, setlike] = useState(false);
  const change = () => {
    if (like == false) {
      setlike(true);
    } else {
      setlike(false);
    }
  };
  return (
    <div className="flex flex-col w-1/5">
      <div className="flex ">
        <div className=" justify-betweem mx-2 rounded-2xl flex flex-col shadow-md">
          <div className="">
            <Image
              src={Props.imageSrc}
              width={400}
              height={500}
              style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              alt="exam image"
            />
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse my-2 items-center">
            <div className="text-textcolor">{Props.title}</div>
            <div className="">
              <Popover
                content={content}
                className={style.popoverTitle}
                trigger="click"
              >
                <img
                  src="/assets/icon/verticalmenupoints.svg"
                  style={{ color: "red" }}
                  alt="verticalmenu"
                />
              </Popover>
            </div>
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse mb-3 mt-1 items-center">
            <div className="text-datecolor">{Props.date}</div>
            <div className="text-timecolor">{Props.time}</div>
            <div className="">
              {!like ? (
                <img
                  src="/assets/icon/heart.svg"
                  onClick={change}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src="/assets/icon/redheart.svg"
                  onClick={change}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exambox;
