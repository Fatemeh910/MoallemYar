import style from "./box.module.css"
const Box =(props) =>{
    return(
        <div className={"w-full p-4 md:flex-col gap-2 lg:w-full text-white relative lg:flex lg:items-center lg:justify-center sm:items-center sm:justify-center  rounded-2xl     "  +style.item}  style={{ background: "linear-gradient(250.38deg," + props.startcolor + " 4.14%," + props.endcolor + " 97.36%)"  }}>
                <div className=" w-full flex items-center flex-col  gap-2  ">
                    <h3>{props.title}</h3>
                    <p>{props.topic}</p>
                    <img className={style.icon} alt=''  src={props.iconUrl}  />
                </div>
            </div>
    )
}
export default Box