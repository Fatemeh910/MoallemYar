import Box from "./Box"
const StatBox = (props) => {
    return (
        <div className=" md:w-full  md:flex md:flex-col  md:rounded-2xl lg:w-full lg:flex lg:flex-row lg:gap-4 p-2 mt-2">
            <div className="lg:w-full md:flex md:items-center md:justify-center md:gap-5 lg:gap-4">
                <div className="lg:flex lg:flex-row lg:w-full lg:mt-3 md:mt-3 md:w-3/4 w-2/4 ">
                    <Box className=" lg:w-full lg:flex lg:flex-row  " title="امتحانات دانش اموزان" topic="32" startcolor="#29d4A8" endcolor="#3677E2" iconUrl="/assets/icon/calender.svg" />
                </div>
                <div className="mt-4 lg:flex lg:flex-row lg:w-full  md:w-3/4 w-2/4 ">
                    <Box className=" lg:w-full lg:flex lg:flex-row  mt-4" title="امتحانات فعال" topic="32" startcolor="#c169D6" endcolor="#643BBD" iconUrl="/assets/icon/calender.clock.svg" />
                </div>
            </div>


            <div className=" lg:w-full md:flex  md:items-center md:justify-center md:gap-5 lg:gap-4">
                <div className="lg:flex lg:flex-row lg:w-full md:w-3/4 w-2/4 mt-4 gap-3 ">
                    <Box className="lg:w-full lg:flex lg:flex-row  " title="تعداددانش اموزان" topic="32" startcolor="#FA2A87" endcolor="#F939CB" iconUrl="/assets/icon/user-plus.svg" />
                </div>
                <div className="mt-4 lg:flex lg:flex-row lg:w-full md:w-3/4 w-2/4 ">
                    <Box className="lg:w-full lg:flex lg:flex-row mt-4 " title="آخرین بازدید" topic="32" startcolor="#F8C274" endcolor="#EE6E62" iconUrl="/assets/icon/clock2.svg" />
                </div>
            </div>

        </div>
    )
}
export default StatBox