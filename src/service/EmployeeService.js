const EMP_URL = `${import.meta.env.VITE_EMP_URL}`;
//get employee
export const GetEmployee = async () => {
  const res = await fetch(EMP_URL);
  if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.employee_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
};
//add employee
export const AddEmployee = async (employeeData) => {
  const res = await fetch(EMP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeData),
  });
  if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.employee_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
};
//update employee
export const UpdateEmployee = async (employeeId, employeeData) => {
  const res = await fetch(`${EMP_URL}/${employeeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeData),
  });
   if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.employee_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
};
//delete employee
export const DeleteEmployee = async (employeeId) => {
  const res = await fetch(`${EMP_URL}/${employeeId}`, {
    method: "DELETE",
  });
   if (res.ok) {
    const data = await res.json(); // ✅ only parse if it's OK
    console.log(data);
     return data.employee_lists;
  } else {
    const errorText = await res.text(); // fallback
    console.error("Request failed:", errorText);
  }
};
