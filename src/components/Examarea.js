import Exambox from "./Exambox";
import style from "@/components/exam.module.css";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const Examarea = () => {
  // slick slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
      </div>
    </div>
  );
};

export default Examarea;
