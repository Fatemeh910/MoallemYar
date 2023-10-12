import Box from "./Box"
const StatBox = (props) => {
    return (
            <div className="w-full md:bg-slate-600 md:w-full  bg-red-500 md:flex md:flex-row lg:bg-blue-600  items-center justify-center md:rounded-2xl lg:w-full lg:flex lg:flex-row gap-4 p-3 ">

                
                <div className=" lg:flex lg:flex-row lg:w-full  md:w-full gap-3">
                <Box className=" lg:w-full lg:flex lg:flex-row " title="امتحانات دانش اموزان" topic="32" startcolor="#29d4A8" endcolor="#3677E2" iconUrl="/assets/icon/calender.svg"/>
                <Box className=" lg:w-full lg:flex lg:flex-row " title="امتحانات فعال" topic="32" startcolor="#c169D6" endcolor="#643BBD" iconUrl="/assets/icon/calender.clock.svg"/>
                </div> 

                <div className="lg:flex lg:flex-row lg:w-full  md:w-full gap-3 ">
                <Box className="lg:w-full lg:flex lg:flex-row " title="تعداددانش اموزان" topic="32" startcolor="#FA2A87" endcolor="#F939CB" iconUrl="/assets/icon/user-plus.svg"/>
                <Box className="lg:w-full lg:flex lg:flex-row  " title="آخرین بازدید" topic="32" startcolor="#F8C274" endcolor="#EE6E62" iconUrl="/assets/icon/clock2.svg"/>
                </div>
                
            </div>
    )
}
export default StatBox