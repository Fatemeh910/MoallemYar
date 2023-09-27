import style from "@/components/exam.module.css";
import Link from "next/link";
import React from "react";
import SlickSlider from "./Slick";
import Exambox from "./Exambox";

const Examarea = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between mx-2 mb-2 ">
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
        <h3 className=" text-textcolor p-2"> آخرین امتحانات</h3>
      </div>
      <SlickSlider />
    </div>
  );
};

export default Examarea;
