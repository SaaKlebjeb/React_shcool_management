import {  useNavigate } from "react-router-dom"
import { useState } from "react"
const menuItem=[
  {
    id:1,
    icon:'/home.svg',
    route:'/',
    title:'HOME'
  },
  {
  id:2,
  icon:'employees.svg',
  route:"/employee",
  title:'EMPLOYEE',
},{
  id:3,
  icon:'/student.svg',
 route:'/student',
 title:'STUDENT'
},{
  id:4,
  icon:'/teacher.svg',
  route:'/teacher',
  title:'TEACHER'
},{
  id:5,
  icon:'/classroom.svg',
  route:'/classroom',
  title:'CLASSROOM'
}
]

const LeftSideBar = () => {
  const [activeID,setActiveID]=useState(1)
  const navigate=useNavigate();
  const HandleClick=(route,id)=>{
    navigate(route)
    setActiveID(id)
  }
  return (
    <div style={{background:'#1b3351'}} className="min-w-44 text-center h-[533px]overflow-x-scroll ">
      <div className="w-full">
        <ul className="flex flex-col gap-3 w-full px-3 mt-3  ">
          {
            menuItem.map((item,index)=>(
              <li onClick={()=>HandleClick(item.route,item.id)} className={`w-full h-14 font-sans text-md flex justify-center items-center rounded-lg hover:cursor-pointer 
                ${activeID === item.id ? 'bg-green-400 text-white hover:bg-green-600' : 'bg-gray-300 text-black hover:bg-gray-400 hover:text-white'}`}  key={item.id}>
                  <div className="flex align-middle gap-3">
                  <img className="w-5 h-5" src={item.icon} alt={item.title} /> <span>{item.title}</span>
                  </div>
               </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default LeftSideBar