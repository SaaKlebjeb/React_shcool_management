const STU_URL = "http://localhost:8081/api/student";

//get student
export const GetStudent=async()=>{
    const res=await fetch(STU_URL);
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