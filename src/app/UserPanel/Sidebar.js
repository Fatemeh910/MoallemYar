import Style from "@/app/UserPanel/StyleSidbar.module.css"
import Logo from "@/assets/logo/logoWhite.svg"
import Image from "next/image"
const Sidebar = () => {
    return (
        <div className="flex min-h-screen">
            <aside className={Style.aside}>
                <Image width={230} src={Logo} alt="logo" className="mx-auto p-5" />
                <div className="pr-12 py-5">
                    <div className={Style.active}>
                        <i className="pr-2">
                            <img src="/assets/icon/Home.svg" alt="home" />
                        </i>
                        <a href="#" className="flex items-center gap-4">
                            پیشخوان
                        </a>
                    </div>
                    <legend className="py-3">امتحانات</legend>
                    <ul className="flex flex-col  gap-5">
                        <li className="flex gap-4 items-center cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 ease">
                            <i>
                                <img src="/assets/icon/calendar.svg" alt="calendar" />
                            </i>
                            <a href="#">امتحان جدید</a>
                        </li>
                        <li className="flex gap-4 items-center cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 ease">
                            <i>
                                <img src="/assets/icon/check.svg"alt="check" />
                            </i>
                            <a href="#">امتحانات برگزار شده</a>
                        </li>
                        <li className="flex gap-4 items-center cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 ease">
                            <i>
                                <img src="/assets/icon/clock.svg" alt="clock" />
                            </i>
                            <a href="#">امتحانات فعال</a>
                        </li>
                    </ul>
                    <legend className="py-3">دانش آموزان</legend>
                    <ul className="flex flex-col gap-5">
                        <li className="flex gap-4 items-center cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 ease">
                            <i>
                                <img src="/assets/icon/user.svg" alt="user" />
                            </i>
                            <a href="#">ثبت دانش آموز جدید</a>
                        </li>
                        <li className="flex gap-4 items-center cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 ease">
                            <i>
                                <img src="/assets/icon/users.svg" alt="users" />
                            </i>
                            <a href="#">لیست دانش آموزان</a>
                        </li>
                    </ul>
                    <legend className="py-3">کلاس ها</legend>
                    <div className="gap-5">
                        <li className="flex gap-4 items-center cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 ease">
                            <i>
                                <img src="/assets/icon/clandarUsers.svg" alt="calendarusers" />
                            </i>
                            <a href="#">مدیریت کلاس ها</a>
                        </li>
                    </div>
                    <legend className="py-3">پروفایل کاربری</legend>
                    <div className="gap-5">
                        <li className="flex gap-4 items-center cursor-pointer hover:text-[#F2F2F2] transition-all duration-300 ease">
                            <i>
                                <img src="/assets/icon/user2.svg" alt="user2" />
                            </i>
                            <a href="#">پروفایل کاربری</a>
                        </li>
                    </div>
                </div>
            </aside>
            <div className={Style.radius}></div>
        </div>

    )
}

export default Sidebar;