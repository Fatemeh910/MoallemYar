import Box from "./Box"
const StatBox = (props) => {
    return (
        <div className="w-full flex lg:flex-row flex-col mt-2 items-stretch  ">
            <div className="flex w-full md:flex-row sm:flex-row flex-col ">
                <Box title="امتحانات دانش اموزان" topic="32" startcolor="#29d4A8" endcolor="#3677E2" iconUrl="/assets/icon/calender.svg" />
                <Box title="امتحانات فعال" topic="32" startcolor="#c169D6" endcolor="#643BBD" iconUrl="/assets/icon/calender.clock.svg" />
            </div>
            <div className="flex w-full md:flex-row sm:flex-row flex-col">
                <Box title="تعداددانش اموزان" topic="32" startcolor="#FA2A87" endcolor="#F939CB" iconUrl="/assets/icon/user-plus.svg" />
                <Box title="آخرین بازدید" topic="32" startcolor="#F8C274" endcolor="#EE6E62" iconUrl="/assets/icon/clock2.svg" />
            </div>
        </div>
    )
}
export default StatBox