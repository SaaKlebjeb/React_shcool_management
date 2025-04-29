
import { Outlet, useNavigate } from "react-router-dom"
const ReplaceRoom = () => {
    const navigate=useNavigate();
    const Submittion=()=>{
        navigate('/classroom/newroom',{replace:true});
    }
  return (
    <div className="flex flex-col items-center gap-5 h-screen">
        <h1 className="text-xl font-bold">Replace Room </h1>
        <button onClick={Submittion} type="submit" className=" hover:cursor-pointer active:scale-105 hover:bg-blue-600 duration-300 w-32 h-11 rounded-lg bg-blue-500">submit</button>
        <Outlet/>
    </div>

  )
}

export default ReplaceRoom