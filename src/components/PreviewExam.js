import Link from "next/link";
import style from "@/components/previewexam.module.css";

const PreviewExam = () => {
  return (
    <div className="flex flex-col w-5/12  rounded-2xl">
      <h3 className="text-right mr-4 text-textColor"> پیش نمایش</h3>
      <div className="shadow-md">
        <div className=""></div>
        <div className="flex justify-center ">
          <Link href="#" className={style.finishQuestion}>
            اتمام سوالات
            <img src="/assets/icon/tickMark.svg" alt="verticalmenu" />{" "}
          </Link>
          <Link href="#" className={style.continue}>
            <img src="/assets/icon/leftArrowWhite.svg" alt="verticalmenu" /> ثبت
            و ادامه
          </Link>
          <Link href="#" className={style.preQuestion}>
            سوال قبلی{" "}
            <img src="/assets/icon/rightArrowWhite.svg" alt="verticalmenu" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewExam;
