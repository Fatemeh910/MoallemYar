import Image from "next/image";
import style from "@/components/mainPage.module.css";
import Link from "next/link";

const MainPage = () => {
  return (
    <div className="flex flex-col w-11/12 float-left ">
      <div className="">
        <h3 className="text-textColor font-bold text-xl mb-8 mt-4">
          دیگر نیاز نیست زمان خود را طرف <br />
          طراحی برگه‌امتحانی کنید!
        </h3>
      </div>
      <div className="" dir="ltr">
        <Image
          src="/assets/img/wallpaper.jpg"
          width={900}
          height={300}
          alt="background image"
          className={style.Image}
        />
      </div>
      <div className={style.txtBox}>
        <img
          src="/assets/icon/pinIcon.svg"
          style={{ width: 15 }}
          alt=""
          className={style.pinIcon}
        />
        <h3 className="text-textColor mb-4 text-sm  font-semibold ">
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
