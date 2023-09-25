import Exambox from "./Exambox";
import style from "@/components/exam.module.css";
import Link from "next/link";

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
      <div className="flex flex-row-reverse ">
        <Exambox
          title="عنوان امتحان 1"
          time="12:00"
          date="1400/10/23"
          imageSrc="/assets/img/image1.png"
        />
        <Exambox
          title="عنوان امتحان 2"
          time="16:00"
          date="1400/10/28"
          imageSrc="/assets/img/image1.png"
        />
        <Exambox
          title="عنوان امتحان 3"
          time="09:00"
          date="1400/10/19"
          imageSrc="/assets/img/image1.png"
        />
        <Exambox
          title="عنوان امتحان 4"
          time="08:00"
          date="1400/10/20"
          imageSrc="/assets/img/image1.png"
        />
        <Exambox
          title="عنوان امتحان 5"
          time="13:30"
          date="1400/10/16"
          imageSrc="/assets/img/image1.png"
        />
        <Exambox
          title="عنوان امتحان 6"
          time="13:30"
          date="1400/10/16"
          imageSrc="/assets/img/image1.png"
        />
      </div>
    </div>
  );
};

export default Examarea;
