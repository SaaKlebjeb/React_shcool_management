const TECH_URL = `${import.meta.env.VITE_TECH_URL}`;
//get Teacher
export const GetTeacher=async()=>{
    const res=await fetch(TECH_URL);
    if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.teacher_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
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
    if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.teacher_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
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
       if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.teacher_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
  };
  //delete Teacher
  export const DeleteTeacher = async (teacherId) => {
    const res = await fetch(`${TECH_URL}/${teacherId}`, {
      method: "DELETE",
    });
    if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.teacher_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
  };