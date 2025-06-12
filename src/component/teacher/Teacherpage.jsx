import { useState,useEffect } from "react"
import TeacherModal from "../modal/TeacherModal"
import { DeleteTeacher, GetTeacher } from "../../service/TeacherService";
const TECH_URL = `${import.meta.env.VITE_TECH_URL}`;
const Teacherpage = () => {
   const [Teacher,setTeacher]=useState([])
      const [editingData, setEditingData] = useState(null);
      const [isEdit, setIsEdit] = useState(false);
      //fetch employee
      const fetchTeacher = async () => {
        try {
          const data = await GetTeacher(TECH_URL);
          setTeacher(data);
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        fetchTeacher();
      }, []);
      console.log(Teacher)
      //delete
      const deleteTeacher = async (teacherId) => {
        try {
         const confirmDelete=window.confirm('Are you sure you want to delete this teacher?')
         if(confirmDelete){
          await DeleteTeacher(teacherId);
          fetchTeacher()
         }
        } catch (err) {
          console.log(err);
        }
      };
       console.log('Teacher:',Teacher)
       return (
         <div className="w-full h-screnn p-2 relative">
          <div className="flex flex-col items-start justify-center w-96 ">
          <p className="text-xl text-white font-bold underline ml-4 mt-2 ">TEACHER INFORMATION</p>
          <button type="button" onClick={()=>document.getElementById('my_modal_1').showModal()}  className=" font-semibold ml-4 mt-4 text-white w-20 h-11 rounded-lg bg-blue-500 hover:cursor-pointer hover:bg-blue-600 active:scale-105 duration-200">CREATE</button>
          {/* <button className="btn bg-green-500" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
          </div>
         <div className="mt-5 mx-2 my-2 p-2">
       <table className="min-w-full bg-white text-black shadow-md rounded-lg overflow-hidden  ">
         <thead className="bg-gray-100 text-center">
           <tr>
           <th className="p-3 border-1 border-black">Teacher ID</th>
           <th className="p-3 border-1 border-black">First Name</th>
           <th className="p-3 border-1 border-black">Last Name</th>
           <th className="p-3 border-1 border-black">Gender</th>
           <th className="p-3 border-1 border-black">DOB</th>
           <th className="p-3 border-1 border-black">Telephone</th>
           <th className="p-3 border-1 border-black">Email</th>
           <th className="p-3 border-1 border-black">Salary</th>
           <th className="p-3 border-1 border-black">Address</th>
           <th className="p-3 border-1 border-black">Province</th>
           <th className="p-3 border-1 border-black">Country</th>
           <th className="p-3 border-1 border-black">Created At</th>
           <th className="p-3 border-1 border-black">Action</th>
           </tr>
         </thead>
         <tbody>
           {
             Teacher.map((item, index) => (
               <tr key={index} className="border-b hover:bg-gray-300 text-center">
                 <td className="p-3 border-1 border-black">{item.teacherID}</td>
                 <td className="p-3 border-1 border-black">{item.firstname}</td>
                 <td className="p-3 border-1 border-black">{item.lastname}</td>
                 <td className="p-3 border-1 border-black">{item.gender}</td>
                 <td className="p-3 border-1 border-black">{new Date(item.dob).toLocaleDateString()}</td>
                 <td className="p-3 border-1 border-black">{item.telephone}</td>
                 <td className="p-3 border-1 border-black">{item.email}</td>
                 <td className="p-3 border-1 border-black">{item.salary}</td>
                 <td className="p-3 border-1 border-black">{item.address}</td>
                 <td className="p-3 border-1 border-black">{item.province}</td>
                 <td className="p-3 border-1 border-black">{item.country}</td>
                 <td className="p-3 border-1 border-black">{new Date(item.created_at).toLocaleString()}</td>
                 <td className="p-3 border-1 border-black">
                 <button
                      onClick={()=>deleteTeacher(item.teacherID)}
                      type="button"
                      className="min-w-28 h-11 rounded-lg hover:cursor-pointer active:scale-105 duration-300 hover:bg-red-700 bg-red-600 "
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingData(item);
                        setIsEdit(true);
                        document.getElementById("my_modal_1").showModal();
                      }}
                      className="min-w-28 h-11 rounded-lg hover:cursor-pointer active:scale-105 duration-300 hover:bg-yellow-700 bg-yellow-600 mt-1"
                    >
                      Edit
                    </button>
                 </td>
     
               </tr>
             ))
           }
         </tbody>
       </table>
       <TeacherModal  
             onAdd={fetchTeacher} // Just refresh the list after add
             onEdit={fetchTeacher} // Just refresh the list after edit
             editingData={editingData}
             isEdit={isEdit}/>
     </div>
     
         </div>
       )
}

export default Teacherpage