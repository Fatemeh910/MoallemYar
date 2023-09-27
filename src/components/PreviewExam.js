import Link from "next/link";

const PreviewExam = () => {
  return (
    <div className="flex flex-col w-5/12 shadow-md rounded-2xl">
      <h3 className="text-right mr-4 bg-"> پیش نمایش</h3>
      <div className="">
        <div className=""></div>
        <Link href="#">اتمام سوالات </Link>
        <Link href="#"> ثبت و ادامه </Link>
        <Link href="#"> سوالات قبلی </Link>
      </div>
    </div>
  );
};

export default PreviewExam;
