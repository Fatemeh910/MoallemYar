import style from "@/components/HowMoallemYar.module.css"

const HowMoallemYar = () => {
  return (
    <div className="w-screen flex flex-col   ">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-textColor">معلم یار</h1>
            <h1 className="text-xl mr-1 text-textColor">چیست؟</h1>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <h3 className="text-center text-textColor text-xl">
            طراحی برگه امتحانی ، همواره یکی از دغدغه های معلمان در طول ترم
            تحصیلی خصوصا پایان ترم بوده است .ما در سامانه آموزشیار تلاش کرده ایم
            فضایی را برای شما فراهم
            <br /> آوریم که در عین سادگی ،امتحان های خودرا در سریعترین زمان ممکن
            طراحی کنید.
          </h3>
        </div>
      </div>
      <div className="flex justify-around mt-12">
        <div className="flex flex-col text-center items-center">
          <img
            src="/assets/icon/settingIcon.svg"
            alt="settingIcon"
            style={{ width: 55 }}
          />
          <h1 className="mb-2">سرعت بالای طراحی </h1>
          <h3>
            بطور متوسط در هر 10 دقیقه میتوایند یک امتحان کامل را
            <br /> طراحی کنید و برگه چاپی آن را دریافت کنید
          </h3>
        </div>

        <div className="flex flex-col text-center items-center">
          <img
            src="/assets/icon/settingIcon.svg"
            alt="settingIcon"
            style={{ width: 55 }}
          />
          <h1 className="mb-2">هسته‌ی قوی پنل کاربری</h1>
          <h3>
            مهندسین ما در پشت صحنه تلاش می کنندتابا بهره گیری <br />
            از آخرین فناوری های روز دنیا بهترین هارابرای شما فراهم کنند.
          </h3>
        </div>
        <div className="flex flex-col text-center items-center">
          <img
            src="/assets/icon/coinIcon.svg"
            alt="coinIcon"
            style={{ width: 55 }}
          />
          <h1 className="mb-2">رایگان!</h1>
          <h3>
            اینجا با خیالت راحت امتحان های خودرا طراحی کنید.ماتا1,
            <br />
            امتحان از شما هزینه‌ای دریافت نمی کنیم.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HowMoallemYar;
