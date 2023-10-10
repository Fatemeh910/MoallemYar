"use client";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "antd";
import style from "@/components/exam.module.css";
import { useState } from "react";

//popover menu
const content = (
  <div className="flex flex-col text-right">
    <Link
      href="#"
      className="text-textColor text-textColor hover:text-linkHoverColor"
    >
      لینک شماره 1
    </Link>
    <Link
      href="#"
      className="text-textColor text-textColor hover:text-linkHoverColor"
    >
      لینک شماره 2
    </Link>
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
    <div className="flex flex-col ">
      <div className="flex ">
        <div className=" justify-betweem mx-2 rounded-2xl flex flex-col shadow-md">
          <div className="">
            <Image
              src={Props.imageSrc}
              width={350}
              height={450}
              style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              alt="exam image"
            />
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse my-1 items-center">
            <div className="text-textColor">{Props.title}</div>
            <div className="">
              <Popover
                content={content}
                className={style.popoverTitle}
                trigger="click"
              >
                <img
                  src="/assets/icon/verticalmenupoints.svg"
                  alt="verticalmenu"
                />
              </Popover>
            </div>
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse mb-2 mt-1 items-center">
            <div className="text-dateColor">{Props.date}</div>
            <div className="text-timeColor">{Props.time}</div>
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
