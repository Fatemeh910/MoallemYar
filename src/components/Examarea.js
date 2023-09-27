"use client"
import Exambox from "./Exambox";
import style from "@/components/exam.module.css";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";



const Examarea = () => {



  return (
    <div className="flex flex-col ">
      <div className="flex justify-between mx-2 mb-2 flex-row-reverse">
        <h3 className=" text-textcolor p-2"> آخرین امتحانات</h3>
        <h3 className="flex items-center text-textcolor">
          <Link
            href={"0000"}
            className="flex p-2 hover:bg-opacity-30 rounded-xl hover:bg-linkbghover "
          >
            <img
              src="/assets/icon/leftArrow.svg"
              style={{ width: 15, marginRight: 15, color: "#555555" }}
            />
            مشاهده همه
          </Link>
        </h3>
      </div>
      <div className="flex ">
       <Exambox imageSrc="/assets/img/image1.png" title="عنوان امتحان 5" time="10:20" date="1400/10/23" />
       <Exambox imageSrc="/assets/img/image1.png" title="عنوان امتحان 4" time="10:20" date="1400/10/23" />
       <Exambox imageSrc="/assets/img/image1.png" title="عنوان امتحان 3" time="10:20" date="1400/10/23" />
       <Exambox imageSrc="/assets/img/image1.png" title="عنوان امتحان 2" time="10:20" date="1400/10/23" />
       <Exambox imageSrc="/assets/img/image1.png" title="عنوان امتحان 1" time="10:20" date="1400/10/23" />
      </div>
    </div>
  );
};

export default Examarea;
