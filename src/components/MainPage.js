import Image from "next/image";


const MainPage = () => {
  return (
    <div className="flex flex-col w-11/12 float-left">
      <div className="">
        <h3 className="text-textColor font-bold text-xl mb-8 mt-4">
          دیگر نیاز نیست زمان خود را طرف <br />
          طراحی برگه‌امتحانی کنید!
        </h3>
      </div>
      <div className="">
      <Image src="/assets/img/wallpaper.jpg" width={900} height={300}  alt="background image" style={{borderRadius:15}}/>
      </div>
     
    </div>
  );
};

export default MainPage;
