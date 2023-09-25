import Image from "next/image";
import Link from "next/link";
import { Popover } from "antd";

//popover menu
const content = (
  <div className="flex flex-col text-right">
    <a href="#" className="text-textcolor text-textcolor hover:text-linkhovercolor">لینک شماره 1</a>
    <a href="#" className="text-textcolor text-textcolor hover:text-linkhovercolor">لینک شماره 2</a>
  </div>
);

const Exambox = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between mx-2 mb-2 flex-row-reverse">
        <h3 className=" text-textcolor p-2"> آخرین امتحانات</h3>
        <h3 className="flex items-center text-textcolor">
          <a href="#" className="flex p-2 rounded-xl hover:bg-linkbghover bg-opacity-1 text-linkhovercolor">
            <img
              src="/assets/icon/leftArrow.svg"
              style={{ width: 15, marginRight: 15, color: "#555555" }}
            />
            مشاهده
          </a>
        </h3>
      </div>
      <div className="flex ">
        <div className="w-1/5 justify-betweem mx-2 rounded-2xl flex flex-col shadow-lg">
          <div className="">
            <Image
              src="/assets/img/image1.png"
              width={400}
              height={500}
              style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              alt="exam image"
            />
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse my-2 items-center">
            <div className="text-textcolor">عنوان امتحان 11</div>
            <div className="">
              <Popover
                content={content}
                title="عنوان"
                style={{textAlign:"Left"}}
                className="text-textcolor"
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
            <div className="text-datecolor">1400/10/23</div>
            <div className="text-timecolor">16:00</div>
            <div className="">
              <img src="/assets/icon/heart.svg" />
            </div>
          </div>
        </div>
        <div className="w-1/5 justify-between mx-2 rounded-2xl flex flex-col shadow-lg">
          <div className="">
            <Image
              src="/assets/img/image1.png"
              width={400}
              height={500}
              style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              alt="exam image"
            />
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse my-2 items-center">
            <div className="text-textcolor">عنوان امتحان 1</div>
            <div className="">
              <Popover
                content={content}
                title="عنوان"
                className="text-textcolor"
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
            <div className="text-datecolor">1400/10/23</div>
            <div className="text-timecolor">16:00</div>
            <div className="">
              <img src="/assets/icon/heart.svg" />
            </div>
          </div>
        </div>
        <div className="w-1/5 justify-betweem mx-2 rounded-2xl flex flex-col shadow-lg">
          <div className="">
            <Image
              src="/assets/img/image1.png"
              width={400}
              height={500}
              style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              alt="exam image"
            />
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse my-2 items-center">
            <div className="text-textcolor">عنوان امتحان 1</div>
            <div className="">
              <Popover
                content={content}
                title="عنوان"
                className="text-textcolor"
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
            <div className="text-datecolor">1400/10/23</div>
            <div className="text-timecolor">16:00</div>
            <div className="">
              <img src="/assets/icon/heart.svg" />
            </div>
          </div>
        </div>
        <div className="w-1/5 justify-betweem mx-2 rounded-2xl flex flex-col shadow-lg">
          <div className="">
            <Image
              src="/assets/img/image1.png"
              width={400}
              height={500}
              style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              alt="exam image"
            />
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse my-2 items-center">
            <div className="text-textcolor">عنوان امتحان 1</div>
            <div className="text-timecolor">
              <Popover
                content={content}
                title="عنوان"
                className="text-textcolor"
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
            <div className="text-datecolor">1400/10/23</div>
            <div className="text-timecolor">16:00</div>
            <div className="text-timecolor">
              <img src="/assets/icon/heart.svg" />
            </div>
          </div>
        </div>
        <div className="w-1/5 justify-betweem mx-2 rounded-2xl flex flex-col shadow-lg">
          <div className="">
            <Image
              src="/assets/img/image1.png"
              width={400}
              height={500}
              style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              alt="exam image"
            />
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse my-2 items-center">
            <div className="text-textcolor">عنوان امتحان 1</div>
            <div className="">
              <Popover
                content={content}
                title="عنوان"
                className="text-textcolor "
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
            <div className="text-datecolor">1400/10/23</div>
            <div className="text-timecolor">16:00</div>
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
