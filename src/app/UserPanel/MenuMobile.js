'use client'
import { useState } from "react"
import Link from "next/link"

export default function MenuMobile() {

  const [isRotate, setIsRotate] = useState(false)

  const Change = () => {
    setIsRotate(!isRotate)
  }

  return (
    <>

      <div className="flex items-center justify-center" >
        <div className={`menuToggle ${isRotate ? "active" : null}`}
          onClick={Change}>

          <div className="box">
            {!isRotate ?
              <img src="/assets/icon/HamburgerMenu.svg" alt="منوی کاربری" />
              :
              <img src="/assets/icon/Close.svg" alt="خروج از منوی کاربری" />
            }
          </div>
          <span className="shadow-md rounded-full"></span>
        </div>
        <div className="menu">
          <ul>
            <li style={{ "--i": "0.1s" }}>
              <Link href="#" title="پیشخوان">
              <img src="/assets/icon/HomeIcon.svg" alt="پیشخوان" />

            </Link>
            </li>
            <li style={{ "--i": "0.2s" }}>
              <Link href="#" title="امتحانات جدید">
              <img src="/assets/icon/Clendar.svg" alt="امتحانات جدید" />
            </Link>
            </li>
            <li></li>
            <li style={{ "--i": "0.2s" }}>
              <Link href="#" title="لیست دانش آموزان">
              <img src="/assets/icon/Users.svg" alt="لیست دانش آموزان" />
            </Link>
            </li>
            <li style={{ "--i": "0.1s" }}>
              <Link href="#" title="پروفایل کاربری">
              <img src="/assets/icon/Profile.svg" alt="پروفایل کاربری" />
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
