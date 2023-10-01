import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-11/12 bg-bgColorFooter text-footerTextColor justify-center itmes-center rounded-tl-2xl p-8 text-xs">
      <div className="flex flex-col w-1/3 ">
        <Link href="#" className="">
          سوالات متداول{" "}
        </Link>
        <Link href="#" className="mt-2">
          درباره ما
        </Link>
        <Link href="#" className="mt-2">
          کد منبع{" "}
        </Link>
        <Link href="#" className="mt-2">
          لوگو و علائم
        </Link>
      </div>
      <div className="flex flex-col w-1/3 justify-center items-center">
        <img src="/assets/logo/logo.svg" style={{ width: 150 }} />
        <div className="flex mt-8">
          طراحی شده با{" "}
          <img
            src="/assets/icon/whiteHeart.svg"
            alt="whiteHeart"
            className="mx-1"
          />{" "}
          در آژانس دیجیتال مارکتینگ آوانگارد
        </div>
      </div>
      <div className="flex flex-col w-1/3 text-right justify-center items-center">
        <div className="">ما را در شبکه های اجتماعی دنبال کنید.</div>
        <div className="flex flex-col mt-2">
          <Link href="#" className=" flex ">
            MoallemYar@
            <img
              src="/assets/icon/xIcon.svg"
              style={{ width: 15 }}
              alt=""
              className="mr-1"
            />
          </Link>
          <Link href="#" className="mt-2 flex ">
            MoallemYar@
            <img
              src="/assets/icon/linkedinIcon.svg"
              style={{ width: 15 }}
              alt=""
              className="mr-1"
            />
          </Link>
          <Link href="#" className="mt-2 flex ">
            MoallemYar@
            <img
              src="/assets/icon/instagramIcon.svg"
              style={{ width: 15 }}
              alt=""
              className="mr-1"
            />
          </Link>
          <Link href="#" className="mt-2 flex ">
            MoallemYar@
            <img
              src="/assets/icon/githubIcon.svg"
              style={{ width: 15 }}
              alt=""
              className="mr-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
