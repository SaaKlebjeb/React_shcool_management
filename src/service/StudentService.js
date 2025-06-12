
const STU_URL = `${import.meta.env.VITE_STU_URL}`;
//get student
export const GetStudent=async()=>{
    const res=await fetch(STU_URL);
    if (!res.ok) {
        throw new Error("Failed to fetch student data");
    }
    const data=await res.json();
    return data.student_lists;
}
//add Student
export const AddStudent=async(studentData)=>{
    const res=await fetch(STU_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(studentData)
    })
    const data=await res.json();
    return data.student_lists;
}
//update Student
export const UpdateStudent = async (studentId, studentData) => {
    const res = await fetch(`${STU_URL}/${studentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });
    const data=await res.json();
    return data.student_lists;
  };
  //delete Student
  export const DeleteStudent = async (studentId) => {
    const res = await fetch(`${STU_URL}/${studentId}`, {
      method: "DELETE",
    });
    const data=await res.json();
    return data.student_lists;
  };