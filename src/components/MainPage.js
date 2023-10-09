import Image from "next/image";
import style from "@/components/mainPage.module.css";
import Link from "next/link";

const MainPage = () => {
  return (
    <div className="flex flex-col w-11/12 float-left relative ">
      <div className={style.pinIcon}>
        <img src="/assets/icon/pinIcon.svg" style={{ width: 25 }} alt="" />
      </div>

      <h3 className="text-textColor font-bold text-4xl mb-8 mt-4 ">
        دیگر نیاز نیست زمان خود را طرف <br />
        طراحی برگه‌امتحانی کنید!
      </h3>
      <div className="" dir="ltr">
        <img src="/assets/img/wallPaper.jpg" alt="backGround Image" className={style.Image}/>
      </div>
      <div className={style.txtBox}>
        <h3 className="text-textColor mb-4 mt-4 text-sm  font-semibold ">
          تنها با ۵ مرحله ساده آزمون خودرا طراحی <br />
          کنید و خروجی PDF آن را دریافت کنید.
          <br />
          همچنین می توانید آزمون خودرا بصورت <br />
          آنلاین برگزار کنید !
        </h3>
        <Link href="#" className={style.btn}>
          همین حالا شروع کنید!
          <img
            src="/assets/icon/shevronSmalLeft.svg"
            style={{ width: 15 }}
            alt=""
            className={style.leftArrowIcon}
          />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
