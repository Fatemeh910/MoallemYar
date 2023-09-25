import Image from "next/image";
import Link from "next/link";
import { Popover } from "antd";
import style from "@/components/exam.module.css"

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
  return (
    <div className="flex flex-col w-1/5">
      <div className="flex ">
        <div className=" justify-betweem mx-2 rounded-2xl flex flex-col shadow-lg">
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
                title="عنوان"
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
          <div className="flex justify-between mx-2 flex-row-reverse mb-3 mt-1 items-center">
            <div className="text-datecolor">{Props.date}</div>
            <div className="text-timecolor">{Props.time}</div>
            <div className="">
              <img src="/assets/icon/heart.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exambox;
