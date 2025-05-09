import { useState,useEffect } from "react"
import StudentModal from "../modal/StudentModal"
import { DeleteStudent, GetStudent } from "../../service/StudentService";
const Studentpage = () => {
    const [Student,setStudent]=useState([])
    const [editingData, setEditingData] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    //fetch employee
    const fetchStudent = async () => {
      try {
        const data = await GetStudent();
        setStudent(data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchStudent();
    }, []);
    console.log(Student)
    //delete
    const deleteStudent = async (studentId) => {
      try {
        const confirmDelete=window.confirm('Are you sure you want to delete this student?')
        if(confirmDelete){
          await DeleteStudent(studentId);
          fetchStudent()
        }
      } catch (err) {
        console.log(err);
      }
    };
    console.log("student:", Student);
    
     return (
       <div className="w-full h-screnn p-2 relative">
        <div className="flex flex-col items-start justify-center w-96 ">
        <p className="text-xl text-white font-bold underline ml-4 mt-2 ">STUDENT INFORMATION</p>
        <button type="button" onClick={()=>document.getElementById('my_modal_1').showModal()}  className=" font-semibold ml-4 mt-4 text-white w-20 h-11 rounded-lg bg-blue-500 hover:cursor-pointer hover:bg-blue-600 active:scale-105 duration-200">CREATE</button>
        {/* <button className="btn bg-green-500" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
        </div>
       <div className="mt-5 mx-2 my-2 p-2">
     <table className="min-w-full bg-white text-black shadow-md rounded-lg overflow-hidden  ">
       <thead className="bg-gray-100 text-center">
         <tr>
         <th className="p-3 border-1 border-black">Student ID</th>
         <th className="p-3 border-1 border-black">First Name</th>
         <th className="p-3 border-1 border-black">Last Name</th>
         <th className="p-3 border-1 border-black">Gender</th>
         <th className="p-3 border-1 border-black">DOB</th>
         <th className="p-3 border-1 border-black">Telephone</th>
         <th className="p-3 border-1 border-black">Email</th>
         <th className="p-3 border-1 border-black">Address</th>
         <th className="p-3 border-1 border-black">Province</th>
         <th className="p-3 border-1 border-black">Country</th>
         <th className="p-3 border-1 border-black">Created At</th>
         <th className="p-3 border-1 border-black">Action</th>
         </tr>
       </thead>
       <tbody>
         {
           Student.map((item, index) => (
             <tr key={index} className="border-b hover:bg-gray-300 text-center">
               <td className="p-3 border-1 border-black">{item.student_id}</td>
               <td className="p-3 border-1 border-black">{item.firstname}</td>
               <td className="p-3 border-1 border-black">{item.lastname}</td>
               <td className="p-3 border-1 border-black">{item.gender}</td>
               <td className="p-3 border-1 border-black">{new Date(item.dob).toLocaleDateString()}</td>
               <td className="p-3 border-1 border-black">{item.tel}</td>
               <td className="p-3 border-1 border-black">{item.email}</td>
               <td className="p-3 border-1 border-black">{item.address}</td>
               <td className="p-3 border-1 border-black">{item.province}</td>
               <td className="p-3 border-1 border-black">{item.country}</td>
               <td className="p-3 border-1 border-black">{new Date(item.created_at).toLocaleString()}</td>
               <td className="p-3 border-1 border-black">
               <button
                    onClick={()=>deleteStudent(item.student_id)}
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
     <StudentModal  
           onAdd={fetchStudent} // Just refresh the list after add
           onEdit={fetchStudent} // Just refresh the list after edit
           editingData={editingData}
           isEdit={isEdit}/>
   </div>
   
       </div>
     )
}

export default Studentpage
