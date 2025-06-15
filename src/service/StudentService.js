const STU_URL = `${import.meta.env.VITE_STU_URL}`;
//get student
export const GetStudent = async () => {
  const res = await fetch(STU_URL);
  if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.student_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
};
//add Student
export const AddStudent = async (studentData) => {
  const res = await fetch(STU_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });
  if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.student_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
};
//update Student
export const UpdateStudent = async (studentId, studentData) => {
  const res = await fetch(`${STU_URL}/${studentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });
  if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.student_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }

};
//delete Student
export const DeleteStudent = async (studentId) => {
  const res = await fetch(`${STU_URL}/${studentId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.student_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
};
