
//get Teacher
export const GetTeacher=async(TECH_URL)=>{
    const res=await fetch(TECH_URL);
    const data=await res.json();
    return data.teacher_lists;
}
//add Teacher
export const AddTeacher=async(teacherData)=>{
    const res=await fetch(TECH_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(teacherData)
    })
    const data=await res.json();
    return data.teacher_lists;
}
//update Teacher
export const UpdateTeacher = async (teacherId, teacherData) => {
    const res = await fetch(`${TECH_URL}/${teacherId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacherData),
    });
    const data=await res.json();
    return data.teacher_lists;
  };
  //delete Teacher
  export const DeleteTeacher = async (teacherId) => {
    const res = await fetch(`${TECH_URL}/${teacherId}`, {
      method: "DELETE",
    });
    const data=await res.json();
    return data.teacher_lists;
  };