import style from "@/components/exambox.module.css"

const Exambox = ()=>{
    return (
        <div className="flex flex-col ">
            <div className="flex justify-between mx-1 mb-2">
                <h3>آخرین امتحانات</h3>
                <h3> مشاهده همه </h3>
            </div>
            <div className="flex ">
            <div className="w-1/5 bg-red-200 justify-around mx-1 rounded-md flex flex-col">
                <div className="">img</div>
                <div className="flex justify-between mx-1">
                    <div className="">title</div>
                    <div className="">icon</div>
                </div>
                <div className="flex justify-between mx-1">
                    <div className="">date</div>
                    <div className="">time</div>
                    <div className="">icon</div>
                </div>
            </div>
            <div className="w-1/5 bg-red-200 justify-around mx-1 rounded-md flex flex-col">
                <div className="">img</div>
                <div className="flex justify-between mx-1">
                    <div className="">title</div>
                    <div className="">icon</div>
                </div>
                <div className="flex justify-between mx-1">
                    <div className="">date</div>
                    <div className="">time</div>
                    <div className="">icon</div>
                </div>
            </div>
            <div className="w-1/5 bg-red-200 justify-around mx-1 rounded-md flex flex-col">
                <div className="">img</div>
                <div className="flex justify-between mx-1">
                    <div className="">title</div>
                    <div className="">icon</div>
                </div>
                <div className="flex justify-between mx-1">
                    <div className="">date</div>
                    <div className="">time</div>
                    <div className="">icon</div>
                </div>
            </div>
            <div className="w-1/5 bg-red-200 justify-around mx-1 rounded-md flex flex-col">
                <div className="">img</div>
                <div className="flex justify-between mx-1">
                    <div className="">title</div>
                    <div className="">icon</div>
                </div>
                <div className="flex justify-between mx-1">
                    <div className="">date</div>
                    <div className="">time</div>
                    <div className="">icon</div>
                </div>
            </div>
            <div className="w-1/5 bg-red-200 justify-around mx-1 rounded-md flex flex-col">
                <div className="">img</div>
                <div className="flex justify-between mx-1">
                    <div className="">title</div>
                    <div className="">icon</div>
                </div>
                <div className="flex justify-between mx-1">
                    <div className="">date</div>
                    <div className="">time</div>
                    <div className="">icon</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Exambox