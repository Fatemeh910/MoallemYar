import Box from "./Box"
const StatBox = (props) => {
    return (
            <div className=" md:w-full  md:flex md:flex-row  sm:items-center sm:justify-center md:rounded-2xl lg:w-full lg:flex lg:flex-row gap-4 p-3 ">

                
                <div className="lg:flex lg:flex-row lg:w-full w-3/4  gap-3">
                <Box className=" lg:w-full lg:flex lg:flex-row " title="امتحانات دانش اموزان" topic="32" startcolor="#29d4A8" endcolor="#3677E2" iconUrl="/assets/icon/calender.svg"/>
                <div className="mt-4">
                <Box className=" lg:w-full lg:flex lg:flex-row mt-4" title="امتحانات فعال" topic="32" startcolor="#c169D6" endcolor="#643BBD" iconUrl="/assets/icon/calender.clock.svg"/>
                </div>
                </div> 

                <div className="lg:flex lg:flex-row lg:w-full md:w-full w-3/4 mt-4 gap-3 ">
                <Box className="lg:w-full lg:flex lg:flex-row  " title="تعداددانش اموزان" topic="32" startcolor="#FA2A87" endcolor="#F939CB" iconUrl="/assets/icon/user-plus.svg"/>

                <div className="mt-4">
                <Box className="lg:w-full lg:flex lg:flex-row mt-3 " title="آخرین بازدید" topic="32" startcolor="#F8C274" endcolor="#EE6E62" iconUrl="/assets/icon/clock2.svg"/>
                </div>
                </div>
                
            </div>
    )
}
export default StatBox