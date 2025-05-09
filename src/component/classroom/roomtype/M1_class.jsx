import StudentDetail from "../../modal/StudentDetail";
import { M1_Students as M1 } from "./Roomtype_And_Student";
const M1_class = () => {
 return (
  <div className="bg-white h-screen rounded-lg shadow-2xl hover:-translate-y-1.5 duration-200 mx-auto w-full p-5 mt-5">
    <h1 className="text-gray-700 underline font-semibold text-xl">
      LIST OF STUDENTS IN CLASS M1
    </h1>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 overflow-y-scroll w-full sm:h-[93%] md:h-[95%] py-2 px-2 h-[90%] mt-2 rounded-md">
      {M1.map((stu,index) => (
        <div className=" card h-[450px] hover:-translate-y-2 transition duration-200 hover:cursor-pointer rounded-lg bg-white shadow-md p-2" key={index}>
          <img src={stu.image} alt={stu.roomtype} className=" h-[50%] object-cover rounded-md" />
          <div className="card-body flex justify-center items-center">
           <div className="w-full h-[100%]">
              <h2 className="text-[15px]  font-mono text-black">ID:<span className="text-gray-500"> {stu.id}</span></h2>
              <h2 className="text-[15px]  font-mono text-black">RoomType:<span  className="text-gray-500"> {stu.roomtype}</span></h2>
              <p className="text-[15px]  font-mono text-black text-lg​​​ ">Name:<span  className="text-gray-500"> {stu.name}</span></p>
              <p className="text-[15px]  font-mono text-black text-lg​​​">Gender:<span  className="text-gray-500"> {stu.gender}</span></p>
              <p className="text-[15px]  font-mono text-black text-lg​​​">Age:<span  className="text-gray-500"> {stu.age}</span></p>
              <div className="text-center p-1 mt-2 w-full">
              <button className="btn bg-sky-500 border-0 " onClick={()=>document.getElementById(`my_modal_${stu.id}`).showModal()}>Student Details</button>
              </div>
           </div>
          </div>
          <StudentDetail modalID={`my_modal_${stu.id}`} ID={stu.id} Image={stu.image} Name={stu.name} Gender={stu.gender} Roomtype={stu.roomtype} Age={stu.age}/>
        </div>
      ))}
    </div>
  </div>
);

};

export default M1_class;
