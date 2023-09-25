
const Examarea = () => {
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
  
        </div>
      </div>
    );
  };
  
  export default Examarea;