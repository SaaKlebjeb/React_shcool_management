import React,{useEffect,useState} from 'react'
import { AddTeacher, UpdateTeacher } from '../../service/TeacherService';

const TeacherModal = ({ onAdd, onEdit, editingData, isEdit }) => {
  const [formData, setFormData] = useState({
     firstname: "",
     lastname: "",
     gender: "",
     dob: "",
     tel: "",
     email: "",
     salary: "",
     address: "",
     province: "",
     country: ""
   });
   //Handlechange
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData(prev => ({
       ...prev,
       [name]: value
     }));
   };
   //edit data
   useEffect(() => {
     if (editingData) {
       setFormData({
         firstname: editingData.firstname,
         lastname: editingData.lastname,
         gender: editingData.gender,
         dob: editingData.dob,
         tel: editingData.tel,
         email: editingData.email,
         salary: editingData.base_salary, // salary in database is base_salary
         address: editingData.address,
         province: editingData.province,
         country: editingData.country
       });
     } else {
       setFormData({
         firstname: "",
         lastname: "",
         gender: "",
         dob: "",
         tel: "",
         email: "",
         salary: "",
         address: "",
         province: "",
         country: ""
       });
     }
   }, [editingData]);
   //submit button
   const handleSubmit = async(e) => {
     e.preventDefault();
   
     const teacherData = {
       firstname: formData.firstname,
       lastname: formData.lastname,
       gender: formData.gender,
       dob: formData.dob,
       tel: formData.tel,
       email: formData.email,
       base_salary: formData.salary,
       address: formData.address,
       province: formData.province,
       country: formData.country
     };
   
     try {
       if (isEdit) {
         const res=await UpdateTeacher(editingData.teacher_id, teacherData);
         console.log('Update response:', res);
         onEdit(); // This will trigger the parent to refresh the list
       } else {
         const response = await AddTeacher(teacherData);
     console.log('Add response:', response);
     onAdd(); // This will trigger the parent to refresh the list
       }
       document.getElementById('my_modal_1').close();
     } catch (err) {
       console.error("Error saving teacher:", err);
       // You might want to show an error message to the user here
     }
   };
   //reset
   const handleReset=()=>{
    setFormData({
         firstname: "",
         lastname: "",
         gender: "",
         dob: "",
         tel: "",
         email: "",
         salary: "",
         address: "",
         province: "",
         country: ""
       });
   }
   return (
     <div>
       {/* Open the modal using document.getElementById('ID').showModal() method */}
       <dialog id="my_modal_1" className="modal">
         <div className="modal-box w-11/12 max-w-5xl">
           <h3 className="font-bold text-lg mb-4">Teacher Form</h3>
           <form onSubmit={handleSubmit} className="grid gap-4">
             {/* Firstname + Lastname */}
             <div className="grid grid-cols-2 gap-4">
               <input
                 type="text"
                 name="firstname"
                 value={formData.firstname}
                 onChange={handleChange}
                 placeholder="First Name"
                 className="input input-bordered w-full"
                 required
               />
               <input
                 type="text"
                 name="lastname"
                 value={formData.lastname}
                 onChange={handleChange}
                 placeholder="Last Name"
                 className="input input-bordered w-full"
                 required
               />
             </div>
 
             {/* Gender + DOB */}
             <div className="grid grid-cols-2 gap-4">
               <select
                 name="gender"
                 value={Number(formData.gender)}
                onChange={handleChange}
                 className="select select-bordered w-full"
                 required
               >
                 <option disabled>
                   Select Gender
                 </option>
                 <option value={1}>Male</option>
                 <option value={0}>Female</option>
               </select>
 
               <input
                 type="date"
                 name="dob"
                 value={formData.dob}
                 onChange={handleChange}
                 className="input input-bordered w-full"
                 required
               />
             </div>
 
             {/* Telephone + Email */}
             <div className="grid grid-cols-2 gap-4">
               <input
                 type="tel"
                 name="tel"
                 value={formData.tel}
                 onChange={handleChange}
                 placeholder="Telephone"
                 className="input input-bordered w-full"
                 required
               />
               <input
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 placeholder="Email"
                 className="input input-bordered w-full"
                 required
               />
             </div>
 
             {/* Salary */}
             <input
               type="number"
               name="salary"
               value={formData.base_salary}
               onChange={handleChange}
               placeholder="Salary"
               className="input input-bordered w-full"
               required
             />
 
             {/* Address */}
             <textarea
               name="address"
               value={formData.address}
               onChange={handleChange}
               placeholder="Address"
               className="textarea textarea-bordered w-full"
               required
             ></textarea>
 
             {/* Province + Country */}
             <div className="grid grid-cols-2 gap-4">
               <input
                 type="text"
                 name="province"
                 value={formData.province}
                 onChange={handleChange}
                 placeholder="Province"
                 className="input input-bordered w-full"
                 required
               />
               <input
                 type="text"
                 name="country"
                 value={formData.country}
                 onChange={handleChange}
                 placeholder="Country"
                 className="input input-bordered w-full"
                 required
               />
             </div>
 
             {/* Buttons */}
             <div className="modal-action flex justify-between mt-4">
               <button type="submit" className="btn btn-primary">
                 {isEdit?'UPDATE':'ADD'}
               </button>
               <button  
                onClick={handleReset}
                type="reset" 
                className="btn btn-warning">
                 Reset
               </button>
               <button
                 type="submit"
                 className="btn"
                 onClick={() => document.getElementById("my_modal_1").close()}
               >
                 Close
               </button>
             </div>
           </form>
         </div>
       </dialog>
     </div>
   );
}

export default TeacherModal
