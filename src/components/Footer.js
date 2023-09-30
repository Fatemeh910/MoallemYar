import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-11/12 bg-bgColorFooter text-footerTextColor justify-center itmes-center">
      <div className="flex flex-col w-1/3 mr-5 ">
        <Link href="#" className="mt-2">
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
      <div className="flex flex-col w-1/3 ">

        <div className="">text</div>
      </div>
      <div className="flex flex-col w-1/3 text-right">
        <div className="">text</div>
        <div className="flex flex-col">
          <Link href="#">1</Link>
          <Link href="#">2</Link>
          <Link href="#">3</Link>
          <Link href="#">4</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
