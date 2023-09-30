import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-11/12 bg-bgColorFooter text-footerTextColor">
      <div className="flex flex-col w-1/3 ">
        <div className="">text</div>
        <div className="flex flex-col">
        <Link href="#">1</Link>
        <Link href="#">2</Link>
        <Link href="#">3</Link>
        <Link href="#">4</Link>
        </div>
      </div>
      <div className="flex flex-col w-1/3 ">
        <div className="">logo</div>
        <div className="">text</div>
      </div>
      <div className="flex flex-col w-1/3 text-right">
        <Link href="#">سوالات متداول </Link>
        <Link href="#">درباره ما</Link>
        <Link href="#">کد منبع </Link>
        <Link href="#">لوگو و علائم</Link>
      </div>
    </div>
  );
};

export default Footer;
