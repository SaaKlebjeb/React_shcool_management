
const EMP_URL = `${import.meta.env.VITE_EMP_URL}`;
//get employee
export const GetEmployee=async(emp_url)=>{
    const res=await fetch(emp_url);
    const data=await res.json();
    return data.employee_lists;
}
//add employee
export const AddEmployee=async(employeeData)=>{
    const res=await fetch(EMP_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(employeeData)
    })
    const data=await res.json();
    return data.employee_lists;
}
//update employee
export const UpdateEmployee = async (employeeId, employeeData) => {
    const res = await fetch(`${EMP_URL}/${employeeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });
    const data=await res.json();
    return data.employee_lists;
  };
  //delete employee
  export const DeleteEmployee = async (employeeId) => {
    const res = await fetch(`${EMP_URL}/${employeeId}`, {
      method: "DELETE",
    });
    const data=await res.json();
    return data.employee_lists;
  };